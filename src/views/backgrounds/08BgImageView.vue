<template>
  <main>
    <h1>Linear Gradient 😼</h1>
    <h3>give an element a linear gradient background</h3>
    <p class="font-mono">bg-gradient-{direction}</p>
    <p class="font-mono">
      bg-none, bg-gradient-to-t, bg-gradient-to-tr, bg-gradient-to-r, bg-gradient-to-br, bg-gradient-to-b,
      bg-gradient-to-bl, bg-gradient-to-l, bg-gradient-to-tl
    </p>
    <br />
    <div class="h-64 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
    <div class="h-64 bg-gradient-to-br from-orange-500 to-yellow-500"></div>
    <div class="h-64 bg-gradient-to-l from-orange-500 to-yellow-500"></div>
    <div class="h-64 bg-gradient-to-l from-orange-500 to-yellow-500 hover:bg-gradient-to-r"></div>
    <div class="bg-[url('/img/hero-pattern.svg')]"></div>
  </main>
</template>

<script setup></script>
