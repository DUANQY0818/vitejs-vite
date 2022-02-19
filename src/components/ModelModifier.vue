<script setup>
import { ref } from 'vue';
import Capitalize from './Capitalize.vue';
let capitalizeText = ref('');
</script>

<template>
  <Capitalize v-model.capitalize="capitalizeText" />
  <h2>{{ capitalizeText }}</h2>
</template>
