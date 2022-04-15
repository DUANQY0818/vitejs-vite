<template>
  <h2>文本插值</h2>
  <span>Message: {{ msg }}</span>

  <h2>原始 HTML</h2>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <h2>Attribute 绑定</h2>
  <div v-bind:id="dynamicId">Attribute 绑定</div>
  <br />
  <h3>简写</h3>
  <div :id="shorthandId">简写</div>
  <h3>布尔型 Attribute</h3>
  <button :disabled="isButtonDisabled">布尔型 Attribute</button>

  <h3>动态绑定多个值</h3>
  <div v-bind="objectOfAttrs">动态绑定多个值</div>
</template>

<script setup>
const msg = 'Hello, world!';
const rawHtml = '<span style="color: red">This should be red.</span>';
const dynamicId = 'dynamicId';
const shorthandId = 'shorthandId';
const isButtonDisabled = true;
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
};
</script>

<style scoped>
#dynamicId {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
#shorthandId {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}

#container {
  width: 200px;
  height: 100px;
}
.wrapper {
  border: 1px solid #000;
  color: red;
}
</style>
