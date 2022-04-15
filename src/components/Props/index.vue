<template>
  <h1>Props</h1>
  <my-component foo="prop"></my-component>
  <my-component1 title="object-title" :count="22"></my-component1>
  <hr />
  <h2>传递不同的值类型</h2>
  <pass-different-value-types
    :likes="42"
    is-published
    :comment-ids="[234, 266, 273]"
    :author="{
      name: 'Veronica',
      company: 'Veridian Dynamics',
    }"
    v-bind="post"
    :prop-a="123"
    :prop-b="123"
    prop-c="123"
  ></pass-different-value-types>
</template>

<script setup>
import MyComponent from './MyComponent.vue';
import MyComponent1 from './MyComponent1.vue';
import PassDifferentValueTypes from './PassDifferentValueTypes.vue';
const post = {
  id: 1,
  title: 'My Journey with Vue',
};
</script>

<style lang="" scoped></style>
