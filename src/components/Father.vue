<template>
  {{ title }}
  <MyComponent @some-event.once="callback" v-model:title="title" />
  <br />
  {{ count }}
  <BlogPost @increase-by="increaseCount" />
  <hr />
  <CustomInputComputed />
</template>

<script setup>
import { ref } from 'vue';
import MyComponent from './MyComponent.vue';
const title = ref('v-model argument example');

function callback() {
  console.log('点击了按钮');
}
import BlogPost from './BlogPost.vue';
let count = ref(0);
function increaseCount(n) {
  count.value += n;
}
import CustomInputComputed from './CustomInputComputed.vue';
</script>
