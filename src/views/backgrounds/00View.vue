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
  { name: 'Background Attachment', href: '/backgrounds/fontfamily' },
  { name: 'Background Clip', href: '/backgrounds/bgclip' },
  { name: 'Background Color', href: '/backgrounds/bgcolor' },
  { name: 'Background Origin', href: '/backgrounds/bgorigin' },
  { name: 'Background Position', href: '/backgrounds/bgposition' },
  { name: 'Background Repeat', href: '/backgrounds/bgrepeat' },
  { name: 'Background Size', href: '/backgrounds/bgsize' },
  { name: 'Background Image', href: '/backgrounds/bgimage' },
  { name: 'Gradient Color Stops', href: '/backgrounds/gradientcolorstops' },
]
</script>
