<script setup>
import { ref, reactive, computed } from 'vue';
const msg2 = '多应用实例';
const rawHtml = '<span style="color: red">This should be red.</span>';
const counter = ref(0);
const objectAttribute = {
  id: 'multi-attr-id',
  class: 'multi-attr-class',
};
const dynamicAttr = 'href';
const url = 'www.baidu.com';
const state = reactive({ count: 0 });
const state1 = { count1: 0 };
function increment() {
  state.count++;
  state1.count1++;
}
const objectRef = ref({ count2: 0 });
objectRef.value = { count3: 3 };
console.log('objectRef', objectRef.value);
const parentMessage = ref('Parent');
const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
console.log('items', items.value[0]);
const myObject = reactive({
  title: '如何在 Vue 中渲染列表',
  author: '王小明',
  publishedAt: '2016-04-10',
});
console.log('myObject', myObject);
const numbers = ref([1, 2, 3, 4, 5]);

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0);
});
console.log('evenNumbers', evenNumbers);
</script>

<template>
  <h1>{{ msg2 }}</h1>
  <p>使用文本插值： {{ rawHtml }}</p>
  <p>使用 v-html：<span v-html="rawHtml"></span></p>
  <button @click="counter++">counter is: {{ counter }}</button>
  <div v-bind="objectAttribute">动态绑定多个值</div>
  <!-- <label
    ><input type="checkbox" checked name="cheese" disabled="" /> Cheese</label
  >
  <br />
  <span v-pre>{{ this will not be compiled }}</span>
  <br /> -->
  <!-- <a :href="url">动态参数</a> -->
  <button @click="increment">reactive</button>
  <h2>{{ state.count }}</h2>
  <h2>{{ state1.count1 }}</h2>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
  <br />
  <li v-for="{ message } in items">
    {{ message }}
  </li>
  <br />
  <li v-for="({ message }, index) in items">{{ message }} - {{ index }}</li>
  <br />
  of
  <li v-for="(item, index) of items">
    {{ parentMessage }} - {{ `${index}test` }} - {{ item.message }}
  </li>
  <br />
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>

  <br />
  <li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>
  <br />
  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>

  <br />
  <ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation">message</li>
    </template>
  </ul>
  <br />
  <ul>
    <li v-for="n in evenNumbers">{{ n }}</li>
  </ul>
</template>
