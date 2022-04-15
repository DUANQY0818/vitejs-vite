<template>
  <h3>Number</h3>
  likes is ：{{ likes }}
  <p>虽然 `42` 是静态的值，我们还是需要使用 v-bind</p>
  <p>因为这是一个 JavaScript 表达式而不是一个字符串</p>
  <code>:likes="42"</code>
  <p>根据一个变量的值动态传入</p>
  <code>:likes="post.likes"</code>
  <hr />

  <h3>Boolean</h3>
  isPublished is ：{{ isPublished }}
  <p>仅写上 prop 但不传值，会隐式表达为 `true`</p>
  <code>is-published</code>
  <p>虽然 `false` `true` 是静态的值，我们还是需要使用 v-bind</p>
  <p>因为这是一个 JavaScript 表达式而不是一个字符串</p>
  <code>:is-published="false"</code>
  <p>根据一个变量的值动态传入</p>
  <code>:is-published="post.isPublished"</code>
  <hr />

  <h3>Array</h3>
  commentIds is ：{{ commentIds }}
  <p>虽然这个数组是静态不变的值，我们还是需要使用 v-bind</p>
  <p>因为这是一个 JavaScript 表达式而不是一个字符串</p>
  <code>:comment-ids="[234, 266, 273]"</code>
  <p>根据一个变量的值动态传入</p>
  <code>:comment-ids="post.commentIds"</code>
  <hr />
  <h3>Object</h3>
  author is : {{ author }}
  <p>虽然这个对象字面量是静态不变的值，我们还是需要使用 v-bind</p>
  <p>因为这是一个 JavaScript 表达式而不是一个字符串</p>
  <code>:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"</code>
  <p>根据一个变量的值动态传入</p>
  <code>:author="post.author"</code>
  <hr />
  <h3>Prop 校验</h3>
</template>

<script setup>
const props = defineProps({
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  title: String,
  id: Number,
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true,
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100,
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 一个返回默认对象/数组值
    // 的工厂函数
    default() {
      return { message: 'hello' };
    },
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value);
    },
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function';
    },
  },
});
console.log(props.id, props.title);
props.author.name = 'Veronica111';
console.log('propA is ：', props.propA);
console.log('propE is ：', props.propE);
</script>

<style lang="" scoped></style>
