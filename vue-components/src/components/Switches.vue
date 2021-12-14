<template>
  <ul class="switch">
    <li
      class="switch-item"
      :class="{ active: index === currentIndex }"
      @click="selectItem(index)"
      v-for="(item, index) in switches"
      :key="index"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['switches', 'currentIndex'],
  methods: {
    selectItem(index) {
      this.$emit('switch', index);
    }
  }
};
</script>

<style>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.switch {
  display: flex;
  width: 200px;
  border: 3px solid #333;
}

.switch-item {
  flex: 1;
  padding: 10px;
  text-align: center;
}

.active {
  background-color: #333;
  color: #fff;
}
</style>
