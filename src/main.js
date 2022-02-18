import { createApp } from 'vue';
import App from './App.vue';
import App2 from './App2.vue';

const app = createApp(App);
app.mount('#app');
console.log('app', app);

const app2 = createApp(App2);
app2.mount('#app2');
