<template>
  <div id="app">
    <h2>vuex 基础</h2>
    <my-addition></my-addition>
    <hr/>
    <my-subtraction></my-subtraction>
    <hr/>
    <h2>vuex 案例</h2>
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import addition from './components/addition.vue';
import subtraction from './components/subtraction.vue';
import toDoList from './components/toDoList.vue'
export default {
  components: {
    'my-addition': addition,
    'my-subtraction': subtraction,
    'to-do-list': toDoList
  }
}
</script>

<style>
body {
  padding: 16px;
}
</style>
