module.exports = [
  {
    url: '/vue-element-admin/model/getModel',
    type: 'get',
    response: config => {
      var modeDataList = {
        'pretrained-model': [{
          'modelName': 'ST-PepCarC',
          'description': 'Cyclopeptide affinity ranking based on Competitive mechanism',
          'imageUrl': 'testImg',
          'github': 'www.baidu.com'
        }, {
          'modelName': 'ST-PepGeo',
          'description': 'Peptide affinity prediction algorithm based on geometric structure features',
          'imageUrl': 'testImg',
          'github': 'www.baidu.com'
        }],
        'sequence based model': [{
          'modelName': 'SynEvo',
          'description': 'Cyclopeptide affinity ranking based on Competitive mechanism',
          'imageUrl': '',
          'github': ''
        }, {
          'modelName': 'SC-CPPMeta',
          'description': 'Cyclopeptide affinity ranking based on Competitive mechanism',
          'imageUrl': '',
          'github': ''
        }]
      }
      return {
        code: 20000,
        data: modeDataList
      }
    }
  }
]
