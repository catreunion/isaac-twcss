<template>
  <div class="flex flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
    <div class="mt-5 flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <RouterLink
          v-for="item in items"
          :to="item.href"
          :key="item.name"
          :class="
            ('border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center border-l-4 px-3 py-2 text-sm font-medium')
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
  { name: 'Configuration', href: '/customization/configuration' },
  { name: 'Content', href: '/customization/content' },
  { name: 'Theme', href: '/customization/theme' },
  { name: 'Screens', href: '/customization/screens' },
  { name: 'Colors', href: '/customization/colors' },
  { name: 'Spacing', href: '/customization/spacing' },
  { name: 'Plugins', href: '/customization/plugins' },
  { name: 'Presets', href: '/customization/presets' },
]
</script>
