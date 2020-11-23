import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/task-list' },
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
  { path: '/setting', name: 'setting', component: () => import('@/views/setting/index.vue'), meta: { title: '设置' } },
  { path: '/setting-theme', name: 'setting-theme', component: () => import('@/views/setting-theme/index.vue'), meta: { title: '主题设置' } },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    children: [{ path: '/task-list', name: 'task-list', component: () => import('@/views/task-list/index.vue') }]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
