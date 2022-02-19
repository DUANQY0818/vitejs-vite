<script setup>
import { computed } from 'vue';
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'someEvent']);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <input type="text" v-model="value" />
  <br />
</template>
