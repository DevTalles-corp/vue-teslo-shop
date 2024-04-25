import { authRoutes } from '@/modules/auth/routes';
import ShopLayout from '@/modules/shop/layouts/ShopLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/modules/shop/views/HomeView.vue'),
        },
      ],
    },

    // Auth Rutes
    authRoutes,
  ],
});

export default router;
