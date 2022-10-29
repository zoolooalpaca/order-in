import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import OrderToDoListView from '@/views/OrderToDoListView.vue';
import OrderCookingView from '@/views/OrderCookingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/order-to-do',
      name: 'order-to-do',
      component: OrderToDoListView,
    },
    {
      path: '/order-cooking',
      name: 'order-cooking',
      component: OrderCookingView,
    },
  ],
});

export default router;
