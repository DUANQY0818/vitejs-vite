<template>
  <button @click="$emit('someEvent')">点击这里抛出事件</button>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>

<script setup>
defineProps(['title']);
defineEmits(['update:title', 'someEvent']);
</script>
