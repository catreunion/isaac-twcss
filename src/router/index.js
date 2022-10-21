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
        title: 'Customization',
      },
    },
    // {
    //   path: '/customization/configuration',
    //   name: 'configurationView',
    //   component: () => import('@/views/customization/01ConfigurationView.vue'),
    //   meta: {
    //     title: 'Configuration',
    //   },
    // },
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
      path: '/flexgrid/flex',
      name: 'flexView',
      component: () => import('@/views/flexgrid/01Flex.vue'),
      meta: {
        title: 'Flex',
      },
    },
    {
      path: '/flexgrid/grid',
      name: 'gridView',
      component: () => import('@/views/flexgrid/02Grid.vue'),
      meta: {
        title: 'Grid',
      },
    },
    {
      path: '/flexgrid/jacontent',
      name: 'jacontentView',
      component: () => import('@/views/flexgrid/03JAContentView.vue'),
      meta: {
        title: 'J/A Content',
      },
    },
    {
      path: '/flexgrid/jaitems',
      name: 'jaitemsView',
      component: () => import('@/views/flexgrid/04JAItemsView.vue'),
      meta: {
        title: 'J/A Items',
      },
    },
    {
      path: '/flexgrid/jaself',
      name: 'jaselfView',
      component: () => import('@/views/flexgrid/05JASelfView.vue'),
      meta: {
        title: 'J/A Self',
      },
    },
    {
      path: '/flexgrid/place',
      name: 'placeView',
      component: () => import('@/views/flexgrid/06PlaceView.vue'),
      meta: {
        title: 'Place',
      },
    },
    {
      path: '/flexgrid/summary',
      name: 'summaryView',
      component: () => import('@/views/flexgrid/10SummaryView.vue'),
      meta: {
        title: 'Flexbox & Grid Summary',
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
    /////////////////////////////////////////////////// Sizing
    {
      path: '/sizing',
      name: 'sizingView',
      component: () => import('@/views/sizing/00View.vue'),
      meta: {
        title: 'Sizing',
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
      path: '/typography/font',
      name: 'fontView',
      component: () => import('@/views/typography/01FontView.vue'),
      meta: {
        title: 'Font',
      },
    },
    {
      path: '/typography/variantnumeric',
      name: 'variantnumericView',
      component: () => import('@/views/typography/06VariantNumericView.vue'),
      meta: {
        title: 'Variant Numeric',
      },
    },
    {
      path: '/typography/liststyletype',
      name: 'liststyletypeView',
      component: () => import('@/views/typography/09ListStyleTypeView.vue'),
      meta: {
        title: 'List Style Type',
      },
    },
    {
      path: '/typography/liststyleposition',
      name: 'liststylepositionView',
      component: () => import('@/views/typography/10ListStylePositionView.vue'),
      meta: {
        title: 'List Style Position',
      },
    },
    {
      path: '/typography/whitespace',
      name: 'whitespaceView',
      component: () => import('@/views/typography/21WhitespaceView.vue'),
      meta: {
        title: 'Whitespace',
      },
    },
    {
      path: '/typography/wordbreak',
      name: 'wordbreakView',
      component: () => import('@/views/typography/22WordBreakView.vue'),
      meta: {
        title: 'Word Break',
      },
    },
    {
      path: '/typography/content',
      name: 'contentView',
      component: () => import('@/views/typography/23ContentView.vue'),
      meta: {
        title: 'Content',
      },
    },
    /////////////////////////////////////////////////// Backgrounds
    {
      path: '/backgrounds',
      name: 'backgroundsView',
      component: () => import('@/views/backgrounds/00View.vue'),
      meta: {
        title: 'Backgrounds',
      },
    },
    {
      path: '/backgrounds/fontfamily',
      name: 'bgattachmentView',
      component: () => import('@/views/backgrounds/01BgAttachmentView.vue'),
      meta: {
        title: 'Background Attachment',
      },
    },
    {
      path: '/backgrounds/bgclip',
      name: 'bgclipView',
      component: () => import('@/views/backgrounds/02BgClipView.vue'),
      meta: {
        title: 'Background Clip',
      },
    },
    {
      path: '/backgrounds/bgcolor',
      name: 'bgcolorView',
      component: () => import('@/views/backgrounds/03BgColorView.vue'),
      meta: {
        title: 'Background Color',
      },
    },
    {
      path: '/backgrounds/bgorigin',
      name: 'bgoriginView',
      component: () => import('@/views/backgrounds/04BgOriginView.vue'),
      meta: {
        title: 'Background Origin',
      },
    },
    {
      path: '/backgrounds/bgposition',
      name: 'bgpositionView',
      component: () => import('@/views/backgrounds/05BgPositionView.vue'),
      meta: {
        title: 'Background Position',
      },
    },
    {
      path: '/backgrounds/bgrepeat',
      name: 'bgrepeatView',
      component: () => import('@/views/backgrounds/06BgRepeatView.vue'),
      meta: {
        title: 'Background Repeat',
      },
    },
    {
      path: '/backgrounds/bgsize',
      name: 'bgsizeView',
      component: () => import('@/views/backgrounds/07BgSizeView.vue'),
      meta: {
        title: 'Background Size',
      },
    },
    {
      path: '/backgrounds/bgimage',
      name: 'bgimageView',
      component: () => import('@/views/backgrounds/08BgImageView.vue'),
      meta: {
        title: 'Background Image',
      },
    },
    {
      path: '/backgrounds/gradientcolorstops',
      name: 'gradientcolorstopsView',
      component: () => import('@/views/backgrounds/09GradientColorStopsView.vue'),
      meta: {
        title: 'Gradient Color Stops',
      },
    },
    /////////////////////////////////////////////////// Borders
    {
      path: '/borders',
      name: 'bordersView',
      component: () => import('@/views/borders/00View.vue'),
      meta: {
        title: 'Borders',
      },
    },
    {
      path: '/borders/border',
      name: 'borderView',
      component: () => import('@/views/borders/01BorderView.vue'),
      meta: {
        title: 'Border',
      },
    },
    {
      path: '/borders/ringwidth',
      name: 'ringwidthView',
      component: () => import('@/views/borders/12RingWidthView.vue'),
      meta: {
        title: 'Ring Width',
      },
    },
    {
      path: '/borders/ringcolor',
      name: 'ringcolorView',
      component: () => import('@/views/borders/13RingColorView.vue'),
      meta: {
        title: 'Ring Color',
      },
    },
    {
      path: '/borders/ringoffsetwidth',
      name: 'ringoffsetwidthView',
      component: () => import('@/views/borders/14RingOffsetWidthView.vue'),
      meta: {
        title: 'Ring Offset Width',
      },
    },
    {
      path: '/borders/ringoffsetcolor',
      name: 'ringoffsetcolorView',
      component: () => import('@/views/borders/15RingOffsetColorView.vue'),
      meta: {
        title: 'Ring Offset Color',
      },
    },
    /////////////////////////////////////////////////// Effects
    {
      path: '/effects',
      name: 'effectsView',
      component: () => import('@/views/effects/00View.vue'),
      meta: {
        title: 'Effects',
      },
    },
    {
      path: '/effects/boxshadow',
      name: 'boxshadowView',
      component: () => import('@/views/effects/01BoxShadowView.vue'),
      meta: {
        title: 'Box Shadow',
      },
    },
    {
      path: '/effects/boxshadowcolor',
      name: 'boxshadowcolorView',
      component: () => import('@/views/effects/02BoxShadowColorView.vue'),
      meta: {
        title: 'Box Shadow Color',
      },
    },
    {
      path: '/effects/opacity',
      name: 'opacityView',
      component: () => import('@/views/effects/03OpacityView.vue'),
      meta: {
        title: 'Opacity',
      },
    },
    {
      path: '/effects/mixblendmode',
      name: 'mixblendmodeView',
      component: () => import('@/views/effects/04MixBlendModeView.vue'),
      meta: {
        title: 'Mix Blend Mode',
      },
    },
    {
      path: '/effects/bgblendmode',
      name: 'bgblendmodeView',
      component: () => import('@/views/effects/05BgBlendModeView.vue'),
      meta: {
        title: 'Background Blend Mode',
      },
    },
    /////////////////////////////////////////////////// Filters
    {
      path: '/filters',
      name: 'filtersView',
      component: () => import('@/views/filters/00View.vue'),
      meta: {
        title: 'Filters',
      },
    },
    {
      path: '/filters/blur',
      name: 'blurView',
      component: () => import('@/views/filters/01BlurView.vue'),
      meta: {
        title: 'Blur',
      },
    },
    {
      path: '/filters/brightness',
      name: 'brightnessView',
      component: () => import('@/views/filters/02BrightnessView.vue'),
      meta: {
        title: 'Brightness',
      },
    },
    {
      path: '/filters/contrast',
      name: 'contrastView',
      component: () => import('@/views/filters/03ContrastView.vue'),
      meta: {
        title: 'Contrast',
      },
    },
    {
      path: '/filters/dropshadow',
      name: 'dropshadowView',
      component: () => import('@/views/filters/04DropShadowView.vue'),
      meta: {
        title: 'Drop Shadow',
      },
    },
    {
      path: '/filters/grayscale',
      name: 'grayscaleView',
      component: () => import('@/views/filters/05GrayscaleView.vue'),
      meta: {
        title: 'Grayscale',
      },
    },
    {
      path: '/filters/huerotate',
      name: 'huerotateView',
      component: () => import('@/views/filters/06HueRotateView.vue'),
      meta: {
        title: 'Hue Rotate',
      },
    },
    {
      path: '/filters/invert',
      name: 'invertView',
      component: () => import('@/views/filters/07InvertView.vue'),
      meta: {
        title: 'Invert',
      },
    },
    {
      path: '/filters/saturate',
      name: 'saturateView',
      component: () => import('@/views/filters/08SaturateView.vue'),
      meta: {
        title: 'Saturate',
      },
    },
    {
      path: '/filters/sepia',
      name: 'sepiaView',
      component: () => import('@/views/filters/09SepiaView.vue'),
      meta: {
        title: 'Sepia',
      },
    },
    {
      path: '/filters/bdblur',
      name: 'bdblurView',
      component: () => import('@/views/filters/10BdBlurView.vue'),
      meta: {
        title: 'Backdrop Blur',
      },
    },
    {
      path: '/filters/bdbrightness',
      name: 'bdbrightnessView',
      component: () => import('@/views/filters/11BdBrightnessView.vue'),
      meta: {
        title: 'Backdrop Brightness',
      },
    },
    {
      path: '/filters/bdcontrast',
      name: 'bdcontrastView',
      component: () => import('@/views/filters/12BdContrastView.vue'),
      meta: {
        title: 'Backdrop Contrast',
      },
    },
    {
      path: '/filters/bdgrayscale',
      name: 'bdgrayscaleView',
      component: () => import('@/views/filters/13BdGrayscaleView.vue'),
      meta: {
        title: 'Backdrop Grayscale',
      },
    },
    {
      path: '/filters/bdhuerotate',
      name: 'bdhuerotateView',
      component: () => import('@/views/filters/14BdHueRotateView.vue'),
      meta: {
        title: 'Backdrop Hue Rotate',
      },
    },
    {
      path: '/filters/bdinvert',
      name: 'bdinvertView',
      component: () => import('@/views/filters/15BdInvertView.vue'),
      meta: {
        title: 'Backdrop Invert',
      },
    },
    {
      path: '/filters/bdopacity',
      name: 'bdopacityView',
      component: () => import('@/views/filters/16BdOpacityView.vue'),
      meta: {
        title: 'Backdrop Opacity',
      },
    },
    {
      path: '/filters/bdsaturate',
      name: 'bdsaturateView',
      component: () => import('@/views/filters/17BdSaturateView.vue'),
      meta: {
        title: 'Backdrop Saturate',
      },
    },
    {
      path: '/filters/bdsepia',
      name: 'bdsepiaView',
      component: () => import('@/views/filters/18BdSepiaView.vue'),
      meta: {
        title: 'Backdrop Sepia',
      },
    },
    /////////////////////////////////////////////////// Tables
    {
      path: '/tables',
      name: 'tablesView',
      component: () => import('@/views/tables/00View.vue'),
      meta: {
        title: 'Tables',
      },
    },
    {
      path: '/tables/bcollapse',
      name: 'bcollapseView',
      component: () => import('@/views/tables/01BCollapseView.vue'),
      meta: {
        title: 'Border Collapse',
      },
    },
    {
      path: '/tables/bspacing',
      name: 'bspacingView',
      component: () => import('@/views/tables/02BSpacingView.vue'),
      meta: {
        title: 'Border Spacing',
      },
    },
    {
      path: '/tables/tablelayout',
      name: 'tablelayoutView',
      component: () => import('@/views/tables/03TableLayoutView.vue'),
      meta: {
        title: 'Table Layout',
      },
    },
    /////////////////////////////////////////////////// Transitions & Animation
    {
      path: '/transani',
      name: 'transaniView',
      component: () => import('@/views/transani/00View.vue'),
      meta: {
        title: 'Transitions & Animation',
      },
    },
    {
      path: '/transani/transproperty',
      name: 'transpropertyView',
      component: () => import('@/views/transani/01TransPropertyView.vue'),
      meta: {
        title: 'Transition Property',
      },
    },
    {
      path: '/transani/transduration',
      name: 'transdurationView',
      component: () => import('@/views/transani/02TransDurationView.vue'),
      meta: {
        title: 'Transition Duration',
      },
    },
    {
      path: '/transani/transtiming',
      name: 'transtimingView',
      component: () => import('@/views/transani/03TransTimingView.vue'),
      meta: {
        title: 'Transition Timing Function',
      },
    },
    {
      path: '/transani/transdelay',
      name: 'transdelayView',
      component: () => import('@/views/transani/04TransDelayView.vue'),
      meta: {
        title: 'Transition Delay',
      },
    },
    {
      path: '/transani/animation',
      name: 'animationView',
      component: () => import('@/views/transani/05AnimationView.vue'),
      meta: {
        title: 'Animation',
      },
    },
    /////////////////////////////////////////////////// Transforms
    {
      path: '/transforms',
      name: 'transformsView',
      component: () => import('@/views/transforms/00View.vue'),
      meta: {
        title: 'Transforms',
      },
    },
    {
      path: '/transforms/scale',
      name: 'scaleView',
      component: () => import('@/views/transforms/01ScaleView.vue'),
      meta: {
        title: 'Scale',
      },
    },
    {
      path: '/transforms/rotate',
      name: 'rotateView',
      component: () => import('@/views/transforms/02RotateView.vue'),
      meta: {
        title: 'Rotate',
      },
    },
    {
      path: '/transforms/translate',
      name: 'translateView',
      component: () => import('@/views/transforms/03TranslateView.vue'),
      meta: {
        title: 'Translate',
      },
    },
    {
      path: '/transforms/skew',
      name: 'skewView',
      component: () => import('@/views/transforms/04SkewView.vue'),
      meta: {
        title: 'Skew',
      },
    },
    {
      path: '/transforms/transformorigin',
      name: 'transformoriginView',
      component: () => import('@/views/transforms/05TransformOriginView.vue'),
      meta: {
        title: 'Transform Origin',
      },
    },
    /////////////////////////////////////////////////// Interactivity
    {
      path: '/interactivity',
      name: 'interactivityView',
      component: () => import('@/views/interactivity/00View.vue'),
      meta: {
        title: 'Interactivity',
      },
    },
    {
      path: '/interactivity/accentcolor',
      name: 'accentcolorView',
      component: () => import('@/views/interactivity/01AccentColorView.vue'),
      meta: {
        title: 'Accent Color',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  // document.title = `TW | ${to.params.state ? `${to.params.city}` : to.meta.title}`
  document.title = `${to.params.state ? `${to.params.city}` : to.meta.title}`
  next()
})

export default router
