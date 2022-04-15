<template></template>

<script setup>
// 组件需要显式声明 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute
// props 可以使用 defineProps() 宏来定义
// 使用对象的
const props = defineProps({
  title: String,
  count: Number,
});
console.log(props.title, props.count);
</script>

<style lang="" scoped></style>
