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
  { name: 'Blur', href: '/filters/blur' },
  { name: 'Brightness', href: '/filters/brightness' },
  { name: 'Contrast', href: '/filters/contrast' },
  { name: 'Drop Shadow', href: '/filters/dropshadow' },
  { name: 'Grayscale', href: '/filters/grayscale' },
  { name: 'Hue Rotate', href: '/filters/huerotate' },
  { name: 'Invert', href: '/filters/invert' },
  { name: 'Saturate', href: '/filters/saturate' },
  { name: 'Sepia', href: '/filters/sepia' },
  { name: 'Backdrop Blur', href: '/filters/bdblur' },
  { name: 'Backdrop Brightness', href: '/filters/bdbrightness' },
  { name: 'Backdrop Contrast', href: '/filters/bdcontrast' },
  { name: 'Backdrop Grayscale', href: '/filters/bdgrayscale' },
  { name: 'Backdrop Hue Rotate', href: '/filters/bdhuerotate' },
  { name: 'Backdrop Invert', href: '/filters/bdinvert' },
  { name: 'Backdrop Opacity', href: '/filters/bdopacity' },
  { name: 'Backdrop Saturate', href: '/filters/bdsaturate' },
  { name: 'Backdrop Sepia', href: '/filters/bdsepia' },
]
</script>
