<template>
  <main>
    <h1>Box Shadow</h1>
    <p class="font-mono">shadow-sm|shadow|shadow-md|shadow-lg|</p>
    <p class="font-mono">shadow-xl|shadow-2xl|</p>
    <p class="font-mono">shadow-inner|shadow-none</p>
    <br />

    <p>apply different sized outer box shadows to an element</p>
    <div class="flex justify-around">
      <div class="h-14 w-20 border-2 border-indigo-500 shadow-md">md</div>
      <div class="h-14 w-20 border-2 border-indigo-500 shadow-lg">lg</div>
      <div class="h-14 w-20 border-2 border-indigo-500 shadow-xl">xl</div>
      <div class="h-14 w-20 border-2 border-indigo-500 shadow-2xl">2xl</div>
    </div>
    <br />

    <p>apply a subtle inset box shadow to an element</p>
    <div class="h-14 w-20 border-2 border-indigo-500 shadow-inner">md</div>
    <br />

    <div class="h-14 w-20 border-2 border-indigo-500 shadow-none">md</div>
  </main>
</template>

<script setup></script>
