<template>
  <main>
    <h1>Background Clip</h1>
    <span class="font-mono">bg-clip-border, bg-clip-padding, bg-clip-content</span
    ><span> - control the bounding box of an element's background</span>
    <br />
    <div class="border-4 border-dashed border-violet-300 bg-violet-600 bg-clip-border p-6"></div>
    <div class="border-4 border-dashed border-violet-300 bg-violet-600 bg-clip-padding p-6"></div>
    <div class="border-4 border-dashed border-violet-300 bg-violet-600 bg-clip-content p-6"></div>

    <span class="font-mono">bg-clip-text</span>
    <br />
    <p>background image become visible through the text</p>
    <p>crop an element’s background to match the shape of the text</p>
    <div class="... text-5xl font-extrabold">
      <span class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
        Hello world
      </span>
    </div>
  </main>
</template>

<script setup></script>
