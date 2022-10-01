<template>
  <div class="flex flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
    <RouterLink :to="{ name: 'homeView' }">
      <div class="flex flex-shrink-0 items-center space-y-5 px-4">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Tailwind logo"
        />
      </div>
    </RouterLink>

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
          <component
            :is="item.icon"
            :class="('text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0')"
            aria-hidden="true"
          />
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { UserGroupIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

const items = [{ name: 'Flexbox & Grid', href: '/flexgrid', icon: UserGroupIcon }]
</script>
