<script setup>
import { ref, onMounted, onUpdated } from 'vue';
const count = ref(0);
onMounted(() => {
  console.log('onMounted');
});
onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log('onUpdated', document.getElementById('count').textContent);
});
</script>

<template>
  LifeCycle
  <button id="count" @click="count++">{{ count }}</button>
</template>
