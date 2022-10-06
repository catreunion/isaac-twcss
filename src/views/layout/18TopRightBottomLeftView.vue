<template>
  <main>
    <h1>Top / Right / Bottom / Left</h1>
    <h3>set the horizontal or vertical position of a positioned element</h3>
    <p class="font-mono">{top|right|bottom|left|inset}-{size}</p>

    <div class="grid grid-cols-3 gap-4">
      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute left-0 top-0 h-20 w-20 border-2 border-indigo-500">top left corner</div>
      </div>
      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute inset-x-0 top-0 h-20 border-2 border-indigo-500">Span top edge</div>
      </div>
      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute top-0 right-0 h-20 w-20 border-2 border-indigo-500">top right corner</div>
      </div>

      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute inset-y-0 left-0 w-20 border-2 border-indigo-500">Span left edge</div>
      </div>
      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute inset-0 border-2 border-indigo-500">Fill entire parent</div>
      </div>
      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute inset-y-0 right-0 w-20 border-2 border-indigo-500">Span right edge</div>
      </div>

      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute bottom-0 left-0 h-20 w-20 border-2 border-indigo-500">bottom left corner</div>
      </div>
      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute inset-x-0 bottom-0 h-20 border-2 border-indigo-500">Span bottom edge</div>
      </div>
      <div class="relative h-40 w-40 border-2 border-orange-500">
        <div class="absolute bottom-0 right-0 h-20 w-20 border-2 border-indigo-500">bottom right corner</div>
      </div>
    </div>

    <div class="pt-12">
      <div class="relative h-32 w-32 border-2 border-orange-500">
        <div class="absolute -left-4 -top-4 h-14 w-14 border-2 border-indigo-500">negative values</div>
      </div>

      <div class="top-[3px]">Arbitrary values</div>
    </div>
  </main>
</template>

<script setup></script>
