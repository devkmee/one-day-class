import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/classList',
    },
    {
      path: '/classList',
      name: 'ClassList',
      component: () => import('../views/ClassList.vue'),
    },
    {
      path: '/class/edit',
      name: 'ClassEdit',
      component: () => import('@/views/ClassEdit.vue'),
    },
    {
      path: '/class/detail/:id',
      name: 'ClassDetail',
      component: () => import('@/views/ClassDetail.vue'),
    },
    /////////////////////////////////////////////
    {
      path: '/itemView/:id',
      name: 'ItemView',
      component: () => import('../views/ItemView.vue'),
    },
    {
      path: '/itemCreate',
      name: 'ItemCreate',
      component: () => import('../views/ItemCreate.vue'),
    },
    {
      path: '/itemEdit/:id',
      name: 'ItemEdit',
      component: () => import('../views/ItemEdit.vue'),
    },
  ],
});

export default router;
