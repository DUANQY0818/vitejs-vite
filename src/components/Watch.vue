<script setup>
import { ref, watch, onMounted, reactive } from 'vue';

const question = ref('');
const answer = ref('问句通常都会带一个问号。;-)');

// 直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = '思考中...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      answer.value = (await res.json()).answer;
    } catch (e) {
      answer.value = '出错了！无法访问该 API。' + error;
    }
  }
});
const x = ref(0);
const y = ref(0);
watch(x, (newX, oldX) => {
  console.log(`newX is ${newX}, oldX is ${oldX}`);
});
watch(
  () => x.value + y.value,

  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);
const obj = reactive({ count: 0 });

watch(obj, (newValue, oldValue) => {
  // 在深层次属性更改时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
  // console.log('123', newValue === oldValue);
});

obj.count++;
onMounted(() => {
  x.value = 12;
});

const url = ref('https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API');
const data = ref(null);

async function fetchData() {
  const response = await fetch(url.value);
  console.log('123', response);
  console.log('2222', response.type);
  // data.value = await response.json();
}
// 立即获取
fetchData();
</script>

<template>
  <p>
    提一个 Yes/No 的问题：
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
