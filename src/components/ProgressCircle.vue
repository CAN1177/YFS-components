<!--
 * @Author: your name
 * @Date: 2021-06-07 00:23:12
 * @LastEditTime: 2021-06-27 11:29:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
-->
<template>
  <div class="progress-circle">
    <svg :width="size" :height="size" viewBox="0 0 100 100">
      <circle
        r="50"
        cx="50"
        cy="50"
        fill="transparent"
        class="progress-background"
      ></circle>
      <circle
        r="50"
        cx="50"
        cy="50"
        fill="transparent"
        class="progress-bar"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 100,
    },
    percent: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      dashArray: Math.PI * 2 * 50,
    };
  },
  computed: {
    dashOffset() {
      return (1 - this.percent) * this.dashArray;
    },
  },
};
</script>

<style>
circle {
  stroke-width: 10px;
  transform-origin: center;
}

.progress-background {
  transform: scale(0.9);
  stroke: #eeeeee
}

.progress-bar {
  stroke: skyblue;
  transform: rotate(-90deg) scale(0.9);
}
</style>
