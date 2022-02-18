<script setup>
import { ref } from 'vue';
const count = ref(0);
const name = ref('Vue.js');
function greeting(event) {
  alert(`Hello ${name.value}!`);
  if (event) {
    console.log(event);
    alert(event.target.tagName);
  }
}
function sayMsg(msg) {
  alert(msg);
}
function warn(message, event) {
  // 此处访问到了 DOM 原生事件
  if (event) {
    console.log(11);
    event.preventDefault();
  }
  alert(message);
}
</script>

<template>
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>
  <br />
  <button @click="greeting">Greet</button>
  <br />
  <button @click="sayMsg('Hello')">Say Hello</button>
  <button @click="sayMsg('Bye')">Say Bye</button>
  <hr />
  <!-- 使用特殊的 $event 变量 -->
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit1</button>
  <button @click="(event) =>warn('Form cannot be submitted yet.222', event)">Submit2</button>
</template>
