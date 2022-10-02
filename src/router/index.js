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
    // Getting Started
    {
      path: '/getstarted',
      name: 'getstartedView',
      component: () => import('@/views/getstarted/00View.vue'),
      meta: {
        title: 'Getting Started',
      },
    },
    {
      path: '/getstarted/installation',
      name: 'installationView',
      component: () => import('@/views/getstarted/01InstallationView.vue'),
      meta: {
        title: 'Installation',
      },
    },
    // Configuration
    {
      path: '/customization',
      name: 'customizationView',
      component: () => import('@/views/customization/00View.vue'),
      meta: {
        title: 'Configuration',
      },
    },
    {
      path: '/customization/configuration',
      name: 'configurationView',
      component: () => import('@/views/customization/01ConfigurationView.vue'),
      meta: {
        title: 'Configuration',
      },
    },
    {
      path: '/customization/content',
      name: 'contentView',
      component: () => import('@/views/customization/02ContentView.vue'),
      meta: {
        title: 'Content',
      },
    },
    {
      path: '/customization/theme',
      name: 'themeView',
      component: () => import('@/views/customization/03ThemeView.vue'),
      meta: {
        title: 'Theme',
      },
    },
    {
      path: '/customization/screens',
      name: 'screensView',
      component: () => import('@/views/customization/04ScreensView.vue'),
      meta: {
        title: 'Screens',
      },
    },
    {
      path: '/customization/colors',
      name: 'colorsView',
      component: () => import('@/views/customization/05ColorsView.vue'),
      meta: {
        title: 'Colors',
      },
    },
    {
      path: '/customization/spacing',
      name: 'spacingView',
      component: () => import('@/views/customization/06SpacingView.vue'),
      meta: {
        title: 'Spacing',
      },
    },
    {
      path: '/customization/plugins',
      name: 'pluginsView',
      component: () => import('@/views/customization/07PluginsView.vue'),
      meta: {
        title: 'Plugins',
      },
    },
    {
      path: '/customization/presets',
      name: 'presetsView',
      component: () => import('@/views/customization/08PresetsView.vue'),
      meta: {
        title: 'Presets',
      },
    },
    // Layout
    {
      path: '/layout',
      name: 'layoutView',
      component: () => import('@/views/layout/00View.vue'),
      meta: {
        title: 'Layout',
      },
    },
    {
      path: '/layout/aspectratio',
      name: 'aspectratioView',
      component: () => import('@/views/layout/01AspectRatioView.vue'),
      meta: {
        title: 'Aspect Ratio',
      },
    },
    {
      path: '/layout/container',
      name: 'containerView',
      component: () => import('@/views/layout/02ContainerView.vue'),
      meta: {
        title: 'Container',
      },
    },
    {
      path: '/layout/columns',
      name: 'columnsView',
      component: () => import('@/views/layout/03ColumnsView.vue'),
      meta: {
        title: 'Columns',
      },
    },
    {
      path: '/layout/breakafter',
      name: 'breakafterView',
      component: () => import('@/views/layout/04BreakAfterView.vue'),
      meta: {
        title: 'Break After',
      },
    }, // Flexbox & Grid
    {
      path: '/flexgrid',
      name: 'flexgridView',
      component: () => import('@/views/flexgrid/00View.vue'),
      meta: {
        title: 'Flexbox & Grid',
      },
    },
    {
      path: '/flexgrid/flexbasis',
      name: 'flexbasisView',
      component: () => import('@/views/flexgrid/01FlexBasisView.vue'),
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
