<template>
  <div>
    <h1 style="text-align: center"> SyneronBrain </h1>

    <el-row style="margin-top: 20px">
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <p class="overview_font">
          SneronyBrain is an innovative peptide drug design and discovery platform developed by Syneron. It is a groundbreaking solution that leverages cutting-edge technologies to simplify and enhance the drug discovery process.
        </p>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <!-- <el-row style="margin-top: 10px">
      <el-col :span="24">
        <div align="center">
          <img src="../../assets/models_img/home-brain.png" class="main_img"/>
        </div>
      </el-col>
    </el-row> -->
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
     <el-row style="margin-top: 10px">
      <el-col :span="24">
        <div align="center" >
          <el-carousel class="main_img" arrow="always" :interval="2000" height="500px" style="width: ; align-items: center;">
          <el-carousel-item class="el-carousel__item" v-for="(img,index) in imgList" :key="index">
            <img v-bind:src="img.url" style="width:100%;height:100%">
          </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    

    <h2 style="text-align: center"> AutoML </h2>

    <el-row style="margin-top: 20px">
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <p class="overview_font">
          We built the first automated machine learning (AutoML) platform in the field of peptide drug discovery. It includes modules such as experiment tracing, feature engineering, model deployment, containerization, and AutoML. This system assists in implementing the model and constructing a standardized process in the AI-based dry-wet closed-loop process.
        </p>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <h2 style="text-align: center"> Pretrained Models </h2>

    <el-row style="margin-top: 20px">
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <p class="overview_font">
          SneronyBrain features a bunch of pre-trained models that enable the extraction of representations of proteins or peptides, improving downstream task performance.
        </p>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <h2 style="text-align: center"> High-throughput prediction algorithms </h2>
    <el-row style="margin-top: 20px">
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <p class="overview_font">
          SneronyBrain has developed a series of high-throughput prediction algorithms, which can quickly explore the vast chemical space and recall a batch of peptide candidates with high efficiency
        </p>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <h2 style="text-align: center"> High-precision prediction algorithms </h2>
    <el-row style="margin-top: 20px">
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <p class="overview_font">
          SneronyBrain also has a series of of high-precision prediction algorithms to refine and optimize peptide candidates based on structural biology and AlphaFold2.
        </p>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <h2 style="text-align: center"> De novo design </h2>
    <el-row style="margin-top: 20px">
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <p class="overview_font">
          SneronyBrain is equipped with several de novo peptide generation algorithms that can be used in De novo design and a multi-objective optimization framework based on reinforcement learning.
        </p>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <h2 style="text-align: center"> Active learning for dry-wet closed-loop. </h2>
    <el-row style="margin-top: 20px">
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <p class="overview_font">
          Our AI platform is based on the active learning framework, which reduces the number of rounds of dry-wet closed-loop iterations and the number of peptides required for synthesis and activity testing. SneronyBrain has already empowered 5+ pipelines to truly realize dry-wet closed-loop.        </p>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
export default {
  name: 'MainPage',
  data() {
    return {
      mainPage: '',
      imgList:[
        {url:require('@/assets/models_img/SC-CPPTransformer.png')},
        {url:require('@/assets/models_img/SD-PepGPT.png')}
      ]
    }
  },
  methods: {
    k8sClick() {
      window.location.href = 'https://81.70.177.174:30443/'
    },
    rayClick() {
      window.location.href = 'http://81.70.177.174:5058/'
    }
  }
}

</script>

<style scoped>

.main_img {
  width: 80%;
}

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

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .carousel-img {
    max-width: 100%;
    max-height: 100%;
  }

  
  .el-carousel__item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
