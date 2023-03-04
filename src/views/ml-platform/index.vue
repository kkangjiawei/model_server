<template>
  <div>
    <el-row style="margin-top: 100px">
      <el-col :span="2"><div class="grid-content"/></el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header">
            <span>Kubenates Dashboard </span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="jumpToK8s()">Jump to</el-button>
          </div>

          <p class="describe_font">
            Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.
          </p>
        </el-card>
      </el-col>
      <el-col :span="2"><div class="grid-content"/></el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header">
            <span>Ray</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="jumpToRay">Jump to</el-button>
          </div>

          <p class="describe_font">
            Ray is a unified framework for scaling AI and Python applications. Ray consists of a core distributed runtime and a toolkit of libraries (Ray AIR) for simplifying ML compute.          </p>
        </el-card>
      </el-col>
      <el-col :span="2"><div class="grid-content"/></el-col>
    </el-row>


    <el-row style="margin-top: 100px">
      <el-col :span="2"><div class="grid-content"/></el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header">
            <span>Image/Container Management</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="jumpToContainerManagement">Jump to</el-button>
          </div>

          <p class="describe_font">
            Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development          </p>
        </el-card>
      </el-col>
      <el-col :span="2"><div class="grid-content"/></el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header">
            <span>Minio Web UI</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="jumpToMinio">Jump to</el-button>
          </div>
          <p class="describe_font">
            MinIO is a High Performance Object Storage. It is API compatible with the Amazon S3 cloud storage service. It can handle unstructured data such as photos, videos, log files, backups, and container images.          </p>
        </el-card>
      </el-col>
      <el-col :span="2"><div class="grid-content"/></el-col>
    </el-row>


    <el-row style="margin-top: 100px">
      <el-col :span="2"><div class="grid-content"/></el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header">
            <span>Experimental Tracking</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="jumpToMLflow">Jump to</el-button>
          </div>

          <p class="describe_font">
            MLflow is an open source platform to manage the ML lifecycle, including experimentation, reproducibility, deployment, and a central model registry.          </p>
        </el-card>
      </el-col>
      <el-col :span="2"><div class="grid-content"/></el-col>
      <el-col :span="10"><div class="grid-content"/></el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  name: 'MlPlatform',
  data() {
    return {

    }
  },
  methods: {
    jumpToK8s() {
      window.location.href="https://81.70.177.174:30443"
    },

    jumpToRay() {
      window.location.href="http://81.70.177.174:5058/#/node"
    },

    jumpToContainerManagement() {
      window.location.href="http://81.70.177.174:5010"
    },

    jumpToMinio() {
      window.location.href="http://81.70.177.174:5003/buckets"
    },

    jumpToMLflow() {
      window.location.href="http://81.70.177.174:5004/#/experiments/0"
    }

  }
}
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.describe_font {
  font-size: 18px;
  font-family: "Microsoft YaHei","Times New Roman", Times, serif;
  text-align: justify;
  font-weight: normal;
  line-height: 1.5;
}
</style>
