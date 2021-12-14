<!--
 * @Author: CAN1177
 * @Date: 2021-06-27 09:37:08
 * @LastEditTime: 2021-06-28 22:31:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yfs-component/src/App.vue
-->
<template>
  <div id="app">
    <h1 class="title">
      CAN1177常用组件合集<a
        href="https://github.com/CAN1177/YFS-components"
        target="view_window"
        >GitHub地址</a
      >
    </h1>

    <div class="container">
      <h3>1、基于ElementUI二次封装的季度组件</h3>
      <season @value="selectValue" />

      <h3>2、SVG --- Canvas环形进度条</h3>
      <div class="progress">
        <progress-circle :size="100" :percent="0.4" />
        <progress-circle1
          :percent="percent"
          :progressConfig="progressConfig1"
          :circleRadius="60"
          :progressGradient="true"
          :percentConfig="percentConfig1"
          :percentGradient="true"
        />
      </div>
      <h3>
        3、ElementU下拉多选增加 <span style="color:skyblue">全选</span> 选项
      </h3>
      <select-all @selectedArray="selectedValue" :options="options" />

      <h3>4、ElementUI 多图上传拖拽排序</h3>
      <img-upload v-model="formData.imgList" :limt="2"/>

      <h3>5、Star 评分组件</h3>
      <star :starNum="5" @starMarkChange="starChange" />

      <h3>6、Switchs组件</h3>
      <switches
        @switch="switchItem"
        :switches="switches"
        :currentIndex="currentIndex"
      ></switches>

      <h3>7、Loading组件</h3>
      <div class="loading">
        <loading :width="100" :color="color"></loading>
        <loading1 :width="100" :color="color"></loading1>
        <loading2 :width="100" :color="color"></loading2>
      </div>

      <h3>8、Dialog组件</h3>
      <dialog-a v-model="show" other-prop="自定义弹窗内容" />
       <el-button @click="handleOpenDialog">显示弹框</el-button>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/loading/Loading.vue";
import Loading1 from "@/components/loading/Loading1.vue";
import Loading2 from "@/components/loading/Loading2.vue";
import Season from "./components/Season.vue";
import ProgressCircle from "./components/progress/ProgressCircle";
import ProgressCircle1 from "./components/progress/CircleProgress";
import SelectAll from "./components/AllSelectDropDown";
import ImgUpload from "./components/ImgUpload"
import Star from "./components/Star";
import Switches from "./components/Switches";
import DialogA from "./components/Dialog";

export default {
  name: "App",
  components: {
    Season, //季度组件
    ProgressCircle, // svg环形进度条
    ProgressCircle1, // canvas环形进度条
    SelectAll, // 下拉全选
    ImgUpload, //多图上传
    Star, //star 评分组件
    Switches, //switch 切换
    Loading,
    Loading1,
    Loading2,
    DialogA,
  },
  data() {
    return {
      show: false,
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
      color: "#9DE4B7",
      percent: 91,
      progressConfig1: {
        ringWidth: 6,
        ringBackground: "#E5E9F2",
        ringColor: "#20A0FF",
        startGradient: "#8E71C7",
        endGradient: "#09c669",
      },
      percentConfig1: {
        size: 20,
        txtColor: "#20A0FF",
        startGradient: "#8E71C7",
        endGradient: "#09c669",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.percent = 50;
    }, 2000);
  },
  methods: {
    handleOpenDialog() {
      this.show = true
    },
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
      console.log("选项是: ", index);
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
.loading,
.progress {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
