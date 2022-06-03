import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})