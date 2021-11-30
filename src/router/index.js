import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// add component
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Order from '../views/Order.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Tracking from '../views/Tracking.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
   {
    path: '/tracking',
    name: 'Tracking',
    component: Tracking,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
