<!--
 * @Author: your name
 * @Date: 2021-06-27 11:48:25
 * @LastEditTime: 2021-06-27 12:23:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yfs-component/src/components/AllSelectDropDown.vue
-->
<template>
  <div>
     <el-select multiple collapse-tags v-model='selectedArray' @change='changeSelect' @remove-tag='removeTag' placeholder='请选择'>
        <el-option label='全选' value='全选' @click.native='selectAll'></el-option>
        <el-option v-for='(item, index) in options' :key='index' :label='item.name' :value='item.name'></el-option>
     </el-select>
  </div>
</template>

<script>
export default {
	props: {
    options: {
			default:[]
		}
  },
  data() {
    return {
      selectedArray: [],
    };
  },

	watch: {
		selectedArray(value) {
			this.$emit('selectedArray', value)
		}
	},
  methods: {
     selectAll() {
      if (this.selectedArray.length < this.options.length) {
        this.selectedArray = []
        this.options.map((item) => {
          this.selectedArray.push(item.name)
        })
        this.selectedArray.unshift('全选')
      } else {
        this.selectedArray = []
      }
    },
    changeSelect(val) {
      if (!val.includes('全选') && val.length === this.options.length) {
        this.selectedArray.unshift('全选')
      } else if (val.includes('全选') && (val.length - 1) < this.options.length) {
        this.selectedArray = this.selectedArray.filter((item) => {
          return item !== '全选'
        })
      }
    },
    removeTag(val) {
      if (val === '全选') {
        this.selectedArray = []
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
