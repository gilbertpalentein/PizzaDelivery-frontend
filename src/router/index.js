import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// add component
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import DetailProduct from '../views/DetailProduct.vue';
import Order from '../views/Order.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Transactions from '../views/Transactions.vue';
import DetailTransaction from '../views/DetailTransaction.vue';

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
    path: '/product/:categoryId/:productId',
    name: 'detailProduct',
    component: DetailProduct,
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
    path: '/transactions',
    name: 'transactions',
    component: Transactions,
  },
  {
    path: '/transactions/:transactionId',
    name: 'detailTransaction',
    component: DetailTransaction,
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
