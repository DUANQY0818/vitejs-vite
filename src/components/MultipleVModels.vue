<script setup>
import { ref, computed } from 'vue';
import UserNameVue from './UserName.vue';
let firstName = ref('John');
let lastName = ref('Doe');
let fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  set(value) {
    const [first, last] = value.split(' ');
    firstName.value = first;
    lastName.value = last;
  },
});
</script>

<template>
  <h1>fullName is：{{ firstName }} {{ lastName }}</h1>
  <UserNameVue v-model:first-name="firstName" v-model:last-name="lastName" />
  <br /><br /><br />

  fullName:
  <input type="text" v-model="fullName" />
</template>
