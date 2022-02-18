<script setup>
import { ref, watch } from 'vue';
import CustomInput from './CustomInput.vue';

const searchText = ref('');
watch(searchText, (newVal, oldVal) => {
  console.log('123', newVal, oldVal);
});
function callback() {
  console.log('callback');
}
</script>

<template>
  Emit
  <h1>123 - {{ searchText }}</h1>
  <CustomInput
    :modelValue="searchText"
    @update:modelValue="(newText) => (searchText = newText)"
    @some-event="callback"
  />
  <br />
  <button @click="searchText += 1">测试</button>
</template>
