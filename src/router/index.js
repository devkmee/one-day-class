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
      path: '/class/:id',
      name: 'ClassDetail',
      component: () => import('@/views/ClassDetail.vue'),
    },
    {
      path: '/class/update/:id',
      name: 'ClassUpdate',
      component: () => import('@/views/ClassEdit.vue'),
    },
    {
      path: '/class/create',
      name: 'ClassCreate',
      component: () => import('@/views/ClassEdit.vue'),
    },
  ],
});

export default router;
