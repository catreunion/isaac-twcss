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
    /////////////////////////////////////////////////// Getting Started
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
    /////////////////////////////////////////////////// Configuration
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
    /////////////////////////////////////////////////// Layout
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
    /////////////////////////////////////////////////// Flexbox & Grid
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
    {
      path: '/flexgrid/flexdirection',
      name: 'flexdirectionView',
      component: () => import('@/views/flexgrid/02FlexDirectionView.vue'),
      meta: {
        title: 'Flex Direction',
      },
    },
    {
      path: '/flexgrid/flexwrap',
      name: 'flexwrapView',
      component: () => import('@/views/flexgrid/03FlexWrapView.vue'),
      meta: {
        title: 'Flex Wrap',
      },
    },
    {
      path: '/flexgrid/flex',
      name: 'flexView',
      component: () => import('@/views/flexgrid/04FlexView.vue'),
      meta: {
        title: 'Flex',
      },
    },
    {
      path: '/flexgrid/flexbrow',
      name: 'flexbrowView',
      component: () => import('@/views/flexgrid/05FlexGrowView.vue'),
      meta: {
        title: 'Flex Grow',
      },
    },
    {
      path: '/flexgrid/flexshrink',
      name: 'flexshrinkView',
      component: () => import('@/views/flexgrid/06FlexShrinkView.vue'),
      meta: {
        title: 'Flex Shrink',
      },
    },
    {
      path: '/flexgrid/order',
      name: 'orderView',
      component: () => import('@/views/flexgrid/07OrderView.vue'),
      meta: {
        title: 'Order',
      },
    },
    {
      path: '/flexgrid/gridtemplatecolumns',
      name: 'gridtemplatecolumnsView',
      component: () => import('@/views/flexgrid/08GridTemplateColumnsView.vue'),
      meta: {
        title: 'Grid Template Columns',
      },
    },
    {
      path: '/flexgrid/gridcolumnstartend',
      name: 'gridcolumnstartendView',
      component: () => import('@/views/flexgrid/09GridColumnStartEndView.vue'),
      meta: {
        title: 'Grid Column Start End',
      },
    },
    {
      path: '/flexgrid/gridtemplaterows',
      name: 'gridtemplaterowsView',
      component: () => import('@/views/flexgrid/10GridTemplateRowsView.vue'),
      meta: {
        title: 'Grid Template Rows',
      },
    },
    {
      path: '/flexgrid/gridrowstartend',
      name: 'gridrowstartendView',
      component: () => import('@/views/flexgrid/11GridRowStartEndView.vue'),
      meta: {
        title: 'Grid Row Start End',
      },
    },
    {
      path: '/flexgrid/gridautoflow',
      name: 'gridautoflowView',
      component: () => import('@/views/flexgrid/12GridAutoFlowView.vue'),
      meta: {
        title: 'Grid Auto Flow',
      },
    },
    {
      path: '/flexgrid/gridautocolumns',
      name: 'gridautocolumnsView',
      component: () => import('@/views/flexgrid/13GridAutoColumnsView.vue'),
      meta: {
        title: 'Grid Auto Columns',
      },
    },
    {
      path: '/flexgrid/gridautorows',
      name: 'gridautorowsView',
      component: () => import('@/views/flexgrid/14GridAutoRowsView.vue'),
      meta: {
        title: 'Grid Auto Rows',
      },
    },
    {
      path: '/flexgrid/gap',
      name: 'gapView',
      component: () => import('@/views/flexgrid/15GapView.vue'),
      meta: {
        title: 'Gap',
      },
    },
    {
      path: '/flexgrid/justifycontent',
      name: 'justifycontentView',
      component: () => import('@/views/flexgrid/16JustifyContentView.vue'),
      meta: {
        title: 'Justify Content',
      },
    },
    {
      path: '/flexgrid/justifyitems',
      name: 'justifyitemsView',
      component: () => import('@/views/flexgrid/17JustifyItemsView.vue'),
      meta: {
        title: 'Justify Items',
      },
    },
    {
      path: '/flexgrid/justifyself',
      name: 'justifyselfView',
      component: () => import('@/views/flexgrid/18JustifySelfView.vue'),
      meta: {
        title: 'Justify Self',
      },
    },
    {
      path: '/flexgrid/aligncontent',
      name: 'aligncontentView',
      component: () => import('@/views/flexgrid/19AlignContentView.vue'),
      meta: {
        title: 'Align Content',
      },
    },
    {
      path: '/flexgrid/alignitems',
      name: 'alignitemsView',
      component: () => import('@/views/flexgrid/20AlignItemsView.vue'),
      meta: {
        title: 'Align Items',
      },
    },
    {
      path: '/flexgrid/alignself',
      name: 'alignselfView',
      component: () => import('@/views/flexgrid/21AlignSelfView.vue'),
      meta: {
        title: 'Align Self',
      },
    },
    {
      path: '/flexgrid/placecontent',
      name: 'placecontentView',
      component: () => import('@/views/flexgrid/22PlaceContentView.vue'),
      meta: {
        title: 'Place Content',
      },
    },
    {
      path: '/flexgrid/placeitems',
      name: 'placeitemsView',
      component: () => import('@/views/flexgrid/23PlaceItemsView.vue'),
      meta: {
        title: 'Place Items',
      },
    },
    {
      path: '/flexgrid/placeself',
      name: 'placeselfView',
      component: () => import('@/views/flexgrid/24PlaceSelfView.vue'),
      meta: {
        title: 'Place Self',
      },
    },
    /////////////////////////////////////////////////// Spacing
    {
      path: '/spacing',
      name: 'spacingView',
      component: () => import('@/views/spacing/00View.vue'),
      meta: {
        title: 'Spacing',
      },
    },
    {
      path: '/spacing/padding',
      name: 'paddingView',
      component: () => import('@/views/spacing/01PaddingView.vue'),
      meta: {
        title: 'Padding',
      },
    },
    {
      path: '/spacing/margin',
      name: 'marginView',
      component: () => import('@/views/spacing/02MarginView.vue'),
      meta: {
        title: 'Margin',
      },
    },
    {
      path: '/spacing/spacebetween',
      name: 'spacebetweenView',
      component: () => import('@/views/spacing/03SpaceBetweenView.vue'),
      meta: {
        title: 'Space Between',
      },
    },
    /////////////////////////////////////////////////// Sizing
    {
      path: '/sizing',
      name: 'sizingView',
      component: () => import('@/views/sizing/00View.vue'),
      meta: {
        title: 'Sizing',
      },
    },
    {
      path: '/sizing/width',
      name: 'widthView',
      component: () => import('@/views/sizing/01WidthView.vue'),
      meta: {
        title: 'Width',
      },
    },
    {
      path: '/sizing/minwidth',
      name: 'minwidthView',
      component: () => import('@/views/sizing/02MinWidthView.vue'),
      meta: {
        title: 'Min-Width',
      },
    },
    {
      path: '/sizing/maxwidth',
      name: 'maxwidthView',
      component: () => import('@/views/sizing/03MaxWidthView.vue'),
      meta: {
        title: 'Max-Width',
      },
    },
    {
      path: '/sizing/height',
      name: 'heightView',
      component: () => import('@/views/sizing/04HeightView.vue'),
      meta: {
        title: 'Height',
      },
    },
    {
      path: '/sizing/minheight',
      name: 'minheightView',
      component: () => import('@/views/sizing/05MinHeightView.vue'),
      meta: {
        title: 'Min-Height',
      },
    },
    {
      path: '/sizing/maxheight',
      name: 'maxheightView',
      component: () => import('@/views/sizing/06MaxHeightView.vue'),
      meta: {
        title: 'Max-Height',
      },
    },
    /////////////////////////////////////////////////// Typography
    {
      path: '/typography',
      name: 'typographyView',
      component: () => import('@/views/typography/00View.vue'),
      meta: {
        title: 'Typography',
      },
    },
    {
      path: '/typography/fontfamily',
      name: 'fontfamilyView',
      component: () => import('@/views/typography/01FontFamilyView.vue'),
      meta: {
        title: 'Font Family',
      },
    },
    {
      path: '/typography/fontsize',
      name: 'fontsizeView',
      component: () => import('@/views/typography/02FontSizeView.vue'),
      meta: {
        title: 'Font Size',
      },
    },
    {
      path: '/typography/fontsmoothing',
      name: 'fontsmoothingView',
      component: () => import('@/views/typography/03FontSmoothingView.vue'),
      meta: {
        title: 'Font Smoothing',
      },
    },
    {
      path: '/typography/fontstyle',
      name: 'fontstyleView',
      component: () => import('@/views/typography/04FontStyleView.vue'),
      meta: {
        title: 'Font Style',
      },
    },
    {
      path: '/typography/fontweight',
      name: 'fontweightView',
      component: () => import('@/views/typography/05FontWeightView.vue'),
      meta: {
        title: 'Font Weight',
      },
    },
    {
      path: '/typography/fontvariantnumeric',
      name: 'fontvariantnumericView',
      component: () => import('@/views/typography/06FontVariantNumericView.vue'),
      meta: {
        title: 'Font Variant Numeric',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = `TW | ${to.params.state ? `${to.params.city}` : to.meta.title}`
  next()
})

export default router
