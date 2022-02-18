<script setup>
const inputValue = ref();
const text = ref();
</script>

<template>
  <input
    type="text"
    :value="text"
    @input="(event) => (text = event.target.value)"
  />
</template>
