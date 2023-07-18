import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.provide('$axios', axios);
app.config.globalProperties.$axios = axios;

app.mount('#app');
