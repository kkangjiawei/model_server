<template>
  <div>
    <el-row style="margin-top: 20px">
      <el-col :span="1"> <div class="grid-content" /> </el-col>
      <el-col :span="22">
        <el-card>
          <div slot="header" class="clearfix">
            <h1 class="title_font">{{modelDetail.name}}</h1>
          </div>
          <div>
            <el-descriptions :column="2">
              <el-descriptions-item label="Model Name">{{ modelDetail.name }}</el-descriptions-item>
              <el-descriptions-item label="Version">
                <el-link :href="modelDetail.code_address" type="primary">
                  {{ modelDetail.version }}
                </el-link>
              </el-descriptions-item>
              <el-descriptions-item label="Dataset">
                <el-link
                  :href="modelDetail.dataset"
                  target="_blank"
                  type="primary"
                  icon="el-icon-bottom"
                >Download</el-link>
              </el-descriptions-item>
              <el-descriptions-item label="Code">
                <el-link type="primary" :href="modelDetail.code_address">
                  <svg-icon icon-class="gitlab" />
                  GitLab
                </el-link>
              </el-descriptions-item>
            </el-descriptions>
          </div>
          <el-divider/>
          <h1 class="title_font">Overview</h1>
          <p class="overview_font">
            {{ modelDetail.long_description }}
          </p>

          <div style="width: 100%;" align="center">
            <img :src="modelDetail.arch_img" style="margin: 0 auto; width: 560px; height: 460px">
<!--            <img :src="../../assets/models_img/" style="margin: 0 auto; width: 560px; height: 460px">-->
          </div>
          <el-divider />
          <h1 class="title_font">Code for inference</h1>
          <div class="editor-container">
            <python-editor ref="pythonEditor" v-model="codeExmple" :code-exmple="codeExmple" />
          </div>
          <div style="margin-top: 50px; width: 100%; height: 20px">
            <el-divider />
          </div>

          <h1 class="title_font">Try the model now !</h1>
          <h5 style="text-align: center">Input data on the left and submit to model</h5>
          <el-row>
            <el-col :span="10">
              <div class="editor-container">
                <json-editor ref="jsonEditor" v-model="value" />
              </div>
            </el-col>
            <el-col :span="2"><div class="grid-content" /></el-col>
            <el-col :span="10">
              <div class="editor-container" v-if="resultType === 1">
                <json-editor ref="jsonEditor" v-model="result" />
              </div>
              <div id="container-01" class="mol-container" v-else-if="resultType === 0"/>
              <div v-else-if="resultType === 2">
                <el-card>
                  <div slot="header" class="clearfix">
                    Prediction Result
                  </div>

                  <el-row>
                    <el-col :span="24">
                      <span v-html="prot_seq"></span>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="24">
                      <span v-html="pep_seq"></span>
                    </el-col>
                  </el-row>
                </el-card>

              </div>
            </el-col>
          </el-row>
          <div style="margin-top: 20px;" align="center">
            <el-button type="primary" size="medium" @click="reasoningModel()">Predict</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="1"> <div class="grid-content" /></el-col>
    </el-row>
  </div>
</template>
<script>
const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'
import JsonEditor from '@/components/JsonEditor'
import PythonEditor from '@/components/PythonEditor'
import { getModelDetail, predict } from '@/api/model_detail'
import $ from '@/utils/jquery'
require('@/utils/3Dmol-min')

export default {
  name: 'ModeDetail',
  components: { JsonEditor, PythonEditor },
  data() {
    return {
      modelName: '',
      value: JSON.parse(jsonData),
      result: '',
      codeExmple: '',
      resultType: 0,
      prot_seq: '',
      pep_seq: '',
      modelDetail: {
      }
    }
  },
  created() {
    var modelName = this.$route.query.modelName
    this.modelName = modelName
    getModelDetail(modelName).then(resp => {
      console.log(resp)
      this.modelDetail = resp.data
      // this.modelDetail.dataset= 'http://120.53.7.54:5065/' + this.modelDetail.dataset
      this.modelDetail.dataset = 'http://120.53.7.54:5065/' + 'v6_SMILES_affinity.zip'
      this.modelDetail.arch_img = require('../../assets/models_img/' + this.modelDetail.arch_img)
      if (this.modelDetail.inf_code.length <= 0) {
        this.modelDetail.inf_code = 'import'
      }
      this.codeExmple = this.modelDetail.inf_code
      this.$refs.pythonEditor.refreshPythonEditor(this.codeExmple)
      this.value = JSON.parse(this.modelDetail.inf_front)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    reasoningModel() {
      console.log('this.value = ' + this.value)
      var data = JSON.stringify(this.value)
      predict(this.modelName, data).then(resp => {
        if (resp.data.data_type === 'pdb') {
          this.resultType = 0
          const element = $('#container-01')
          const config = { backgroundColor: 'white' }
          const viewer = $3Dmol.createViewer(element, config)
          // eslint-disable-next-line no-undef
          viewer.addModel(resp.data.results, 'pdb') /* load data */
          viewer.setStyle({chain: 'B'}, {cartoon: {color: 'spectrum'}})
          viewer.setStyle({chain: 'C'}, {cartoon: {color: 'white'}})
          viewer.setStyle({chain: 'D'}, {cartoon: {color: 'red'}})
          viewer.addSurface($3Dmol.SurfaceType.VDW, {opacity: 0.75, color: 'white'}, {chain:'D'})
          viewer.zoomTo() /* set camera */
          viewer.render() /* render scene */
        } else if(resp.data.data_type === 'float') {
          this.resultType = 1
          this.result = "Prediction Result: " + resp.data.results
          this.$message({
            message: "Predict Successfly! See the Results Blow",
            type: 'success'
          })
        } else if(resp.data.data_type === 'interaction') {
          this.resultType = 2
          var respResult = JSON.parse(resp.data.results)
          this.prot_seq = '<h5>' + 'Binding residues in protein: ' + '</h5> <br> '
          var tempDict = {}
          for (var i = 0; i < respResult['prot_index'].length; i++) {
            tempDict[respResult['prot_index'][i]] = '1'
          }
          for (var i = 0; i < respResult['prot_seq'].length; i++) {
            console.log("this.tempDict = ", tempDict[i.toString()])
            if (tempDict[i.toString()] == 1) {
              this.prot_seq += '<div style="color: red; display: inline-block">' + respResult['prot_seq'][i] + '</div>'
            } else {
              this.prot_seq += '<div style="display: inline-block">' + respResult['prot_seq'][i] + '</div>'
            }
          }
          this.prot_seq = '<p class="overview_font">' + this.prot_seq + '</p>'


          this.pep_seq = '<h5>' + 'Binding residues in peptide: ' + '</h5> <br> '
          tempDict = {}
          for (var i = 0; i < respResult['pep_index'].length; i++) {
            tempDict[respResult['pep_index'][i]] = '1'
          }
          for (var i = 0; i < respResult['pep_seq'].length; i++) {
            if (tempDict[i.toString()] == 1) {
              this.pep_seq += '<div style="color: red; display: inline-block">' + respResult['pep_seq'][i] + '</div>'
            } else {
              this.pep_seq += respResult['pep_seq'][i]
            }
          }
          this.pep_seq = '<p>' + this.pep_seq + '</p>'
          console.log("this.result = ", this.result)
        }
        // eslint-disable-next-line no-undef
      }).catch(err => {
        console.log(err)
      })
    },
    change(value) {
      console.log('change this.value = ' + value)
    },
    input(value) {
      console.log('input this.value = ' + value)
    },
    test() {

    }
  }
}
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.overview_font {
  font-size: 20px;
  font-family: "Microsoft YaHei","Times New Roman", Times, serif;
  text-align: justify;
  font-weight: normal;
  line-height: 1.5;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.mol-container {
  width: 100%;
  height: 300px;
  position: relative;
  border-left: 1px solid #DCDFE6;
}

.title_font {
  text-align: center;
}
</style>
