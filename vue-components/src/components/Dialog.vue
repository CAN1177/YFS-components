// 子组件
<template>
  <el-dialog
    title="我是弹框A"
    :visible="show"
    width="40%"
    @close="handleCloseElementDialog"
  >
    <div>
      <div>{{ otherProp }}</div>
      <el-button @click="handleCloseElementDialog">关闭弹框</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'DialogA',
  model: {
    prop: 'show',
    event: 'my-close'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    // 其他props
    otherProp: {
      type: String,
      default: 'otherProp'
    }
  },
  methods: {
    handleCloseElementDialog() {
      this.$emit('my-close', false)
    }
  }
}
</script>