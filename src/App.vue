<!--
 * @Author: CAN1177
 * @Date: 2021-06-27 09:37:08
 * @LastEditTime: 2021-06-27 17:36:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yfs-component/src/App.vue
-->
<template>
  <div id="app">
    <h1 class="title">CAN1177常用组件合集<a href="https://github.com/CAN1177/YFS-components">GitHub地址</a></h1>

    <div class="container">
      <h3>1、基于ElementUI二次封装的季度组件</h3>
      <season @value="selectValue" />

      <h3>2、SVG环形进度条</h3>
      <progress-circle :size="100" :percent="0.4" />

      <h3>3、ElementU下拉多选增加 <span style="color:skyblue">全选</span> 选项</h3>
      <select-all @selectedArray="selectedValue" :options="options" />

      <h3>4、ElementUI 多图上传拖拽排序</h3>
      <!-- <img-upload v-model="formData.imgList"/> -->

      <h3>5、Star 评分组件</h3>
      <star :starNum="5" @starMarkChange="starChange" />


       <h3>6、Switchs组件</h3>
      <switches
        @switch="switchItem"
        :switches="switches"
        :currentIndex="currentIndex"
      ></switches>
    </div>
  </div>
</template>

<script>
import Season from "./components/Season.vue";
import ProgressCircle from "./components/ProgressCircle";
import SelectAll from "./components/AllSelectDropDown";
// import ImgUpload from "./components/ImgUpload"
import Star from "./components/Star";
import Switches from "./components/Switches";

export default {
  name: "App",
  components: {
    Season, //季度组件
    ProgressCircle, // svg环形进度条
    SelectAll, // 下拉全选
    // ImgUpload, //多图上传
    Star, //star 评分组件
    Switches, //switch 切换
  },
  data() {
    return {
      options: [
        { name: "梅西", label: "one" },
        { name: "C罗", label: "tow" },
        { name: "卡卡", label: "three" },
        { name: "内马尔", label: "four" },
        { name: "小罗", label: "five" },
      ],
      formData: {
        imgList: [], // formData初始值要带上imgList属性，以保证数据响应式
      },
      currentIndex: 0,
      switches: [
        {
          title: "选项1",
        },
        {
          title: "选项2",
        },
      ],
    };
  },
  methods: {
    selectValue(value) {
      console.log("选择的季度是： ", value);
    },
    selectedValue(value) {
      console.log("选择的项目是： ", value);
    },
    starChange(value) {
      console.log("你的分数是", `${value}分`);
    },
    switchItem(index) {
      console.log('第几个switch按钮: ', index);
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.title {
  text-align: center;
}
.container {
  margin-left: 20px;
}
</style>
