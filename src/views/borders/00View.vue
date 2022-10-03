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
  { name: 'Border Radius 😼', href: '/borders/bradius' },
  { name: 'Border Width 😼', href: '/borders/bwidth' },
  { name: 'Border Color 😼', href: '/borders/bcolor' },
  { name: 'Border Style', href: '/borders/borderstyle' },
  { name: 'Divide Width', href: '/borders/dividewidth' },
  { name: 'Divide Color', href: '/borders/dividecolor' },
  { name: 'Divide Style', href: '/borders/dividestyle' },
  { name: 'Outline Width', href: '/borders/outlinewidth' },
  { name: 'Outline Color', href: '/borders/outlinecolor' },
  { name: 'Outline Style', href: '/borders/outlinestyle' },
  { name: 'Outline Offset', href: '/borders/outlineoffset' },
  { name: 'Ring Width', href: '/borders/ringwidth' },
  { name: 'Ring Color', href: '/borders/ringcolor' },
  { name: 'Ring Offset Width', href: '/borders/ringoffsetwidth' },
  { name: 'Ring Offset Color', href: '/borders/ringoffsetcolor' },
]
</script>
