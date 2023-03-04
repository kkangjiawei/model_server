<template>
  <div class="python-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/theme/lesser-dark.css'
import 'codemirror/theme/tomorrow-night-eighties.css'
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/ambiance-mobile.css'
import 'codemirror/theme/solarized.css'
import 'codemirror/mode/python/python'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/mdn-like.css'
import 'codemirror/theme/neat.css'
import 'codemirror'
require('script-loader!jsonlint')
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'

export default {
  name: 'PythonEditor',
  /* eslint-disable vue/require-prop-types */
  props: ['codeExmple'],
  data() {
    return {
      pythonEditor: false
    }
  },
  watch: {
    value(value) {
      this.pythonEditor.setValue(value)
    }
  },
  mounted() {
    this.pythonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: false,
      mode: 'python',
      gutters: ['CodeMirror-lint-markers'],
      theme: 'neat',
      lint: true,
      readOnly: true
    })
    this.pythonEditor.setValue(this.codeExmple)
  },
  methods: {
    getValue() {
      return this.pythonEditor.getValue()
    },
    refreshPythonEditor(value) {
      this.pythonEditor.setValue(value)
    }
  }

}
</script>

<style lang="scss" scoped>
.python-editor {
  height: 100%;
  position: relative;

  ::v-deep {
    .CodeMirror {
      height: auto;
      min-height: 300px;
    }

    .CodeMirror-scroll {
      min-height: 300px;
    }

    .cm-s-rubyblue span.cm-string {
      color: #F08047;
    }
  }
}
</style>
