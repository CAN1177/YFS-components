<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todoData.length">
      <li v-for="todo in todoData" :key="todo">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
let title = ref("");
let todoData = ref([{ title: "学习Vue", done: false }]);

function addTodo() {
  todoData.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}
function clear() {
  todoData.value = todoData.value.filter((v) => !v.done);
}
let active = computed(() => {
  return todoData.value.filter((v) => !v.done).length;
});
let all = computed(() => todoData.value.length);
let allDone = computed({
  get: function () {
    return active.value === 0;
  },
  set: function (value) {
    todoData.value.forEach((todo) => {
      todo.done = value;
    });
  },
});
</script>

<style lang="scss" scoped>
$padding: 10px;
$white: #fff;
ul {
  width: 500px;
  margin: 0 auto;
  padding: 0;
  li {
    &:hover {
      cursor: pointer;
    }
    list-style-type: none;
    margin-bottom: $padding;
    padding: $padding;
    background: $white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
