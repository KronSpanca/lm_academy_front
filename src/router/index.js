import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomePageView.vue'),
        },
        {
          path: 'privacy-policy',
          name: 'PrivacyPolicy',
          component: () => import('@/components/default/PrivacyPolicy.vue'),
          meta: {
            visitor: true,
          }
        },
        {
          path: 'terms-of-service',
          name: 'TermsOfService',
          component: () => import('@/components/default/TermsOfService.vue'),
          meta: {
            visitor: true,
          }
        },
        {
          path: 'contact',
          name: 'ContactPage',
          component: () => import('@/components/default/ContactPage.vue'),
          meta: {
            visitor: true,
          }
        },
        {
          path: 'about-us',
          name: 'AboutUs',
          component: () => import('@/views/AboutUsView.vue'),
          meta: {
            visitor: true,
          }
        },
      ],
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/Errors/NotFound.vue'),
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/Auth/LoginView.vue'),
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/Auth/RegisterView.vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'DashboardLayout',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard/DashboardView.vue'),
        },
        {
          path: 'users-lists',
          name: 'DashboardUserlist',
          component: () => import('@/views/Dashboard/UsersList.vue'),
        },
      ],
    },
  ],
})

export default router