<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue', 'someEvent']);
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <br />
  <button @click="$emit('someEvent')">点击这里抛出事件</button>
</template>
