<script setup>
import { ref } from 'vue';
import AttributeChildVue from './AttributeChild.vue';
const btnName = ref('');
const count = ref(0);
function onClick() {
  console.log('click');
  count.value++;
  btnName.value = `clicked-${count.value}`;
}
</script>

<template>
  <AttributeChildVue class="large" @click="onClick" :btn-name="btnName" />
</template>
