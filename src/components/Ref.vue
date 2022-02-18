<script setup>
import { ref, onMounted } from 'vue';

// 声明一个 ref 来存放该元素的引用
// 必须和模板 ref 同名
const inputRef = ref(null);
const list = ref([1, 2, 3]);
const itemRefs = ref([]);
onMounted(() => {
  inputRef.value.focus();
  alert(itemRefs.value.map((i) => i.textContent));
});

</script>

<template>
  Ref：
  <input type="text" ref="inputRef" />
  <hr />
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>
