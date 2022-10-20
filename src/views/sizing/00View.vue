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
  { name: 'Width/Height', href: '/sizing/width' },
  { name: 'Min-Width', href: '/sizing/minwidth' },
  { name: 'Max-Width', href: '/sizing/maxwidth' },
  { name: 'Min-Height', href: '/sizing/minheight' },
  { name: 'Max-Height', href: '/sizing/maxheight' },
]
</script>
