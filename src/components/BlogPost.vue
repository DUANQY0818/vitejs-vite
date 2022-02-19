<template>
  <button @click="increaseBy">Increase by 1</button>
</template>

<script setup>
import { ref } from 'vue';
// const emit = defineEmits({
//   increaseBy(value) {
//     if (value % 2 === 0) {
//       console.warn('value is even!');
//       return true;
//     } else {
//       console.error('value is odd!');
//       return false;
//     }
//   },
// });
const emit = defineEmits(['increaseBy']);
let count = ref(0);
function increaseBy() {
  emit('increaseBy', count.value++);
}
</script>
