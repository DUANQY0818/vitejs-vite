<template>
  <button @click="$emit('someEvent')">click me</button>
  <button @click="$emit('increaseBy', 1)">Increase by 1</button>
</template>

<script setup>
// defineEmits(['someEvent', 'increaseBy']);
defineEmits({
  someEvent: null,
  increaseBy(value) {
    console.log('increase by-----', value);
    return true;
  },
});
</script>

<style lang="" scoped></style>
