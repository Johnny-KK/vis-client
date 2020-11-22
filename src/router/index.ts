import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/task-list'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: "/",
    name: "layout",
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/task-list',
        name: 'task-list',
        component: () => import('@/views/task-list/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
