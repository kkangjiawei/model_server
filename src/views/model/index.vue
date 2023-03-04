<template>
  <div>
    <div v-for="(modelObj, modelObjKey) in modelDatas">
      <el-row style="margin-top: 10px">
        <el-col :span="24">
          <h2 style="text-align: center">{{ modelDatasMap[modelObjKey].name }}</h2>
          <h4 style="text-align: center"> {{ modelDatasMap[modelObjKey].describe }} </h4>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="1"> <div class="grid-content" /></el-col>
        <el-col :span="22">
          <el-row style="margin-top: 0px">
            <div v-for="(modelData, index) in modelObj" :index="index">
              <el-col :span="1" style="margin-top: 10px"> <div class="grid-content" /></el-col>
              <el-col :span="7" style="margin-top: 10px">
                <el-card class="box-card" shadow="hover">
                  <div class="image_div">
                    <a :href="modelData.code_address">
                      <img :src="modelData.arch_img" class="image">
<!--                      <img src="require('../../assets/models_img/SC-CPPTransformer.png')" class="image">-->
<!--                      <img src="../../assets/models_img/">-->
                    </a>
                  </div>
                  <el-divider/>
                  <el-link type="primary" :href="modelData.github">{{modelData.name}}</el-link>
                  <div style="height: 100px; width: 100%; overflow: hidden;">
                    <h4>{{modelData.short_description}}</h4>
                  </div>
                  <el-row>
                    <el-button size="small" type="text" icon="el-icon-top-right" @click="jumpModelDetail(modelData.name)">Jump to</el-button>
                  </el-row>
                </el-card>
              </el-col>
            </div>
          </el-row>
        </el-col>
        <el-col :span="1"> <div class="grid-content" /></el-col>
      </el-row>
      <div style="width: 30%; margin: 0 auto">
        <el-divider></el-divider>
      </div>
    </div>




  </div>
</template>

<script>
import stPepCarC from '../../assets/custom_images/ST-PepCarC.png'
import synEvo from '../../assets/custom_images/SynEvo.png'
import { getModel } from '@/api/model'
export default {
  name: 'Model',
  data() {
    return {
      stPepCarC,
      synEvo,
      modelDatas: {
        'ptm': [],
        'vsca': [],
        'dnd': [],
        'cppa': [],
        'ot': []
      },
      modelDatasMap: {
        'vsca': {
          'name': 'Virtual Screenning Core Algorithm',
          'describe': ''
        },
        'dnd': {
          'name': 'De novo Design',
          'describe': ''
        },
        'ot': {
          'name': 'Other Toolkits',
          'describe': ''
        },
        'cppa': {
          'name': 'Ceil Penerating Peptide Algorithm',
          'describe': ''
        },
        'ptm': {
          'name': 'Pre-trained Models',
          'describe': ''
        }
      }

    }
  },
  created() {
    getModel().then(response => {
      console.log(response.data)
      // 对数据进行分类
      // 1.Virtual Screenning Core Algorithm
      // 2.De novo Design
      // 3.Other Toolkits
      // 4.Ceil Penerating Peptide Algorithm
      for (let i = 0; i < response.data.length; i++) {
        response.data[i].arch_img = require('../../assets/models_img/' + response.data[i].arch_img)
        if (response.data[i].category === 'Virtual Screenning Core Algorithm') {
          this.modelDatas['vsca'].push(response.data[i])
          this.modelDatasMap['vsca'].describe = response.data[i].cat_description
        } else if (response.data[i].category === 'De novo Design') {
          this.modelDatas['dnd'].push(response.data[i])
          this.modelDatasMap['dnd'].describe = response.data[i].cat_description
        } else if (response.data[i].category === 'Other Toolkits') {
          this.modelDatas['ot'].push(response.data[i])
          this.modelDatasMap['ot'].describe = response.data[i].cat_description
        } else if (response.data[i].category === 'Ceil Penerating Peptide Algorithm') {
          this.modelDatas['cppa'].push(response.data[i])
          this.modelDatasMap['cppa'].describe = response.data[i].cat_description
        } else if (response.data[i].category === 'Pre-trained Models') {
          this.modelDatas['ptm'].push(response.data[i])
          this.modelDatasMap['ptm'].describe = response.data[i].cat_description
        }
      }
      console.log('data = ', this.modelDatas)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    jumpModelDetail(modelName) {
      this.$router.push('/model/detail?modelName=' + modelName)
    }

  }
}
</script>

<style scoped>

.image {
  width: 100%;
  height: 230px;
  display: block;
}

.image_div {
  height: 200px;
  width: 100%;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
