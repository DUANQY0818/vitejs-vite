<template>
  <h1>组件注册</h1>
  <h2>
    <a
      href="https://staging-cn.vuejs.org/guide/components/registration.html#global-registration"
      >全局注册</a
    >
  </h2>
  <p>我们可以使用 app.component() 方法，让组件在当前 Vue 应用中全局可用。</p>
  <h2>
    <a
      href="https://staging-cn.vuejs.org/guide/components/registration.html#local-registration"
      局部注册
    ></a>
  </h2>
  <Component> 局部注册把 </Component>
</template>

<script setup>
import Component from './Component.vue';
</script>

<style lang="" scoped></style>
