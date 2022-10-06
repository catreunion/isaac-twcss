<template>
  <main>
    <h1>Grid Template Columns</h1>
    <h3>create grids with n equally sized columns</h3>
    <p class="font-mono">grid-cols-{n}</p>
    <p class="font-mono">n : 1|2|3|4|5|6|7|8|9|10|11|12|none</p>
    <br />

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      <div class="border-2 border-indigo-500">Box 01</div>
      <div class="border-2 border-indigo-500">Box 02</div>
      <div class="border-2 border-indigo-500">Box 03</div>
      <div class="border-2 border-indigo-500">Box 04</div>
      <div class="border-2 border-indigo-500">Box 05</div>
      <div class="border-2 border-indigo-500">Box 06</div>
    </div>
    <br />

    <p>
      By default, Tailwind includes grid-template-column utilities for creating basic grids with up to 12
      equal width columns
    </p>
  </main>
</template>

<script setup></script>
