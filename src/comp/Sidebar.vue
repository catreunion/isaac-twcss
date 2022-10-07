<template>
  <div class="flex flex-col overflow-y-auto border-r border-gray-200 bg-white pb-4">
    <div class="mt-5 flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <RouterLink
          v-for="item in items"
          :to="item.href"
          :key="item.name"
          :class="
            ('hover:bg-gray-150 border-transparent text-gray-600 hover:text-gray-900',
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
import { RouterLink } from 'vue-router'

const items = [
  { name: 'Home', href: '/' },
  { name: 'Getting Started', href: '/getstarted' },
  { name: 'Customization', href: '/customization' },
  { name: 'Layout', href: '/layout' },
  { name: 'Flexbox & Grid', href: '/flexgrid' },
  { name: 'Spacing', href: '/spacing' },
  { name: 'Sizing', href: '/sizing' },
  { name: 'Typography', href: '/typography' },
  { name: 'Backgrounds', href: '/backgrounds' },
  { name: 'Borders', href: '/borders' },
  { name: 'Effects', href: '/effects' },
  { name: 'Filters', href: '/filters' },
  { name: 'Tables', href: '/tables' },
  { name: 'Transitions & Animation', href: '/transani' },
  { name: 'Transforms', href: '/transforms' },
]
</script>
