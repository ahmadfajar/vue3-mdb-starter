import { createVueMdb } from 'vue-mdbootstrap';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';

import 'vue-mdbootstrap/styles';
import 'vue-mdbootstrap/theme-light';
import 'vue-mdbootstrap/styles-color';
import '@/assets/main.scss';

const app = createVueMdb(App);

app.use(createPinia()).use(router).mount('#app');
