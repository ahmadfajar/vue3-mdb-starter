import { createVueMdb } from 'vue-mdbootstrap';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

import 'vue-mdbootstrap/styles';
import '@/assets/main.scss';

const app = createVueMdb(App);

app.use(createPinia()).use(router).mount('#app');
