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
    },
    {
      path: '/layout/breakbefore',
      name: 'breakbeforeView',
      component: () => import('@/views/layout/05BreakBeforeView.vue'),
      meta: {
        title: 'Break Before',
      },
    },
    {
      path: '/layout/breakinside',
      name: 'breakinsideView',
      component: () => import('@/views/layout/06BreakInsideView.vue'),
      meta: {
        title: 'Break Inside',
      },
    },
    {
      path: '/layout/boxdecorationbreak',
      name: 'boxdecorationbreakView',
      component: () => import('@/views/layout/07BoxDecorationBreakView.vue'),
      meta: {
        title: 'Box Decoration Break',
      },
    },
    {
      path: '/layout/boxsizing',
      name: 'boxsizingView',
      component: () => import('@/views/layout/08BoxSizingView.vue'),
      meta: {
        title: 'Box Sizing',
      },
    },
    {
      path: '/layout/display',
      name: 'displayView',
      component: () => import('@/views/layout/09DisplayView.vue'),
      meta: {
        title: 'Display',
      },
    },
    {
      path: '/layout/floats',
      name: 'floatsView',
      component: () => import('@/views/layout/10FloatsView.vue'),
      meta: {
        title: 'Floats',
      },
    },
    {
      path: '/layout/clear',
      name: 'clearView',
      component: () => import('@/views/layout/11ClearView.vue'),
      meta: {
        title: 'Clear',
      },
    },
    {
      path: '/layout/isolation',
      name: 'isolationView',
      component: () => import('@/views/layout/12IsolationView.vue'),
      meta: {
        title: 'Isolation',
      },
    },
    {
      path: '/layout/objectfit',
      name: 'objectfitView',
      component: () => import('@/views/layout/13ObjectFitView.vue'),
      meta: {
        title: 'Object Fit',
      },
    },
    {
      path: '/layout/objectposition',
      name: 'objectpositionView',
      component: () => import('@/views/layout/14ObjectPositionView.vue'),
      meta: {
        title: 'Object Position',
      },
    },
    {
      path: '/layout/overflow',
      name: 'overflowView',
      component: () => import('@/views/layout/15OverflowView.vue'),
      meta: {
        title: 'Overflow',
      },
    },
    {
      path: '/layout/overscrollbehavior',
      name: 'overscrollbehaviorView',
      component: () => import('@/views/layout/16OverscrollBehaviorView.vue'),
      meta: {
        title: 'Overscroll Behavior',
      },
    },
    {
      path: '/layout/position',
      name: 'positionView',
      component: () => import('@/views/layout/17PositionView.vue'),
      meta: {
        title: 'Position',
      },
    },
    {
      path: '/layout/trbl',
      name: 'trblView',
      component: () => import('@/views/layout/18TopRightBottomLeftView.vue'),
      meta: {
        title: 'Top Right Bottom Left',
      },
    },
    {
      path: '/layout/visibility',
      name: 'visibilityView',
      component: () => import('@/views/layout/19VisibilityView.vue'),
      meta: {
        title: 'Visibility',
      },
    },
    {
      path: '/layout/zindex',
      name: 'zindexView',
      component: () => import('@/views/layout/20ZIndexView.vue'),
      meta: {
        title: 'Z-Index',
      },
    },
    // Flexbox & Grid
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
