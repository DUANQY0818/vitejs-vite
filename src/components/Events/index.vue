<template>
  <h1>组件事件</h1>
  <my-component
    @some-event.once="handleSomeEvent"
    @increase-by="handleIncreaseBy"
  ></my-component>

  <custom-input v-model="searchText"></custom-input>
  {{ searchText }}
</template>

<script setup>
import { ref } from 'vue';
import MyComponent from './MyComponent.vue';
import CustomInput from './CustomInput.vue';
function handleSomeEvent() {
  console.log('some event');
}
function handleIncreaseBy(value) {
  console.log('increase by', value);
}
const searchText = ref('hello');
</script>

<style lang="" scoped></style>
