<template>
  <div class="flex flex-col overflow-y-auto border-r border-gray-200 bg-white pb-4">
    <div class="mt-5 flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <RouterLink
          v-for="item in items"
          :to="item.href"
          :key="item.name"
          :class="
            ('border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'border-l-1 group flex items-center px-3 py-2 text-sm font-medium')
          "
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
const items = [
  { name: 'Aspect Ratio', href: '/layout/aspectratio' },
  { name: 'Container', href: '/layout/container' },
  { name: 'Columns', href: '/layout/columns' },
  { name: 'Break After', href: '/layout/breakafter' },
  { name: 'Break Before', href: '/layout/breakbefore' },
  { name: 'Break Inside', href: '/layout/breakinside' },
  { name: 'Box Decoration Break', href: '/layout/boxdecorationbreak' },
  { name: 'Box Sizing', href: '/layout/boxsizing' },
  { name: 'Display', href: '/layout/display' },
  { name: 'Floats', href: '/layout/floats' },
  { name: 'Clear', href: '/layout/clear' },
  { name: 'Isolation', href: '/layout/isolation' },
  { name: 'Object Fit', href: '/layout/objectfit' },
  { name: 'Object Position', href: '/layout/objectposition' },
  { name: 'Overflow', href: '/layout/overflow' },
  { name: 'Overscroll Behavior', href: '/layout/overscrollbehavior' },
  { name: 'Position', href: '/layout/position' },
  { name: 'Top Right Bottom Left', href: '/layout/trbl' },
  { name: 'Visibility', href: '/layout/visibility' },
  { name: 'Z-Index', href: '/layout/zindex' },
]
</script>
