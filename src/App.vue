<template>
  <div class="flex">
    <Sidebar />
    <!-- <RouterView v-slot="{ Component }">
      <Transition name="page-opacity">
        <component :is="Component" />
      </Transition>
    </RouterView> -->
    <RouterView />
  </div>
</template>

<script setup>
import Sidebar from '@/comp/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<style>
.page-opacity-enter-from {
  opacity: 0;
}

.page-opacity-enter-active {
  transition: 6000ms ease all;
}
</style>
