import { createRouter, createWebHistory, } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Cells.vue'),
    },
  ],
},)

export default router
