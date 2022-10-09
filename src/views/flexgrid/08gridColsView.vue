<template>
  <main>
    <h1>Grid Template Columns</h1>
    <h2>create grids with n equally sized columns</h2>
    <p class="font-mono">grid-cols-{n}</p>
    <p class="font-mono">n : 1|2|3|4|5|6|7|8|9|10|11|12|none</p>
    <div class="py-8">
      <div
        class="grid grid-cols-1 gap-2 border-2 border-pink-500 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div class="border-2 border-indigo-500 p-2">File</div>
        <div class="border-2 border-indigo-500 p-2">Edit</div>
        <div class="border-2 border-indigo-500 p-2">View</div>
        <div class="border-2 border-indigo-500 p-2">Help</div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
