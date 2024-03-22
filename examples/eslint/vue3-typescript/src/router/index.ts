import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('~/views/pages/notfound.vue'),
    }
  ],
});

export { router };
