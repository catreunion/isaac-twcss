<template>
  <main>
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Letter Spacing -->
      <div>
        <h1>Letter Spacing</h1>
        <h2 class="font-mono">tracking-{size}</h2>
        <h3 class="font-mono">size : tighter|tight|normal|</h3>
        <h3 class="font-mono">size : wide|wider|widest</h3>
        <p class="tracking-tighter">The quick brown fox jumps over the lazy dog</p>
        <p class="tracking-normal">The quick brown fox jumps over the lazy dog</p>
        <p class="tracking-wider">The quick brown fox jumps over the lazy dog</p>
        <p class="tracking-[.25em]">The quick brown fox jumps over the lazy dog</p>
      </div>

      <!-- Text Align & Line Height -->
      <div class="grid-col-1 grid gap-6">
        <div>
          <h1>Text Align</h1>
          <h2 class="font-mono">text-{alignment}</h2>
          <h3 class="font-mono">alignment : left|center|right|justify|</h3>
          <h3 class="font-mono">alignment : start|end</h3>
        </div>

        <div>
          <h1>Line Height</h1>
          <h2 class="font-mono">Fixed line-heights : leading-{size}</h2>
          <h3 class="font-mono">size : 3|4|5|6|7|8|9|10</h3>
          <p>give an element a fixed line-height, irrespective of the current font-size</p>
          <p class="w-96 text-center leading-6">{{ patrickStar }}</p>
        </div>

        <div>
          <h2 class="font-mono">Relative line-heights : leading-{size}</h2>
          <h3 class="font-mono">size : none|tight|snug|normal|relaxed|loose</h3>
          <p>give an element a relative line-height based on its current font-size</p>
          <p class="w-96 text-justify leading-relaxed">{{ patrickStar }}</p>
        </div>

        <div>
          <p class="w-96 text-right leading-[3rem]">{{ patrickStar }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { patrickStar } from '@/spongeBob.js'
</script>
