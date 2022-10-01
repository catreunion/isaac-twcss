import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      name: 'aboutView',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About',
      },
    },
    {
      path: '/flexgrid',
      name: 'flexgridView',
      component: () => import('@/views/FlexGridView.vue'),
      meta: {
        title: 'Flexbox & Grid',
      },
    },
    {
      path: '/flexgrid/flexbasis',
      name: 'flexbasisView',
      component: () => import('@/views/FlexBasisView.vue'),
      meta: {
        title: 'Flex Basis',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = `Learn TW | ${to.params.state ? `${to.params.city}` : to.meta.title}`
  next()
})

export default router
