<template>
  <main>
    <div class="grid-col-1 grid w-96 gap-6 py-6">
      <div>
        <h1>Letter Spacing</h1>
        <h2 class="font-mono">tracking-{size}</h2>
        <h3 class="font-mono">tighter|tight|normal|</h3>
        <h3 class="font-mono">wide|wider|widest</h3>
        <p class="tracking-tighter">Patrick is an obese pink starfish</p>
        <p class="tracking-tight">Patrick is an obese pink starfish</p>
        <p class="tracking-normal">Patrick is an obese pink starfish</p>
        <p class="tracking-wide">Patrick is an obese pink starfish</p>
        <p class="tracking-wider">Patrick is an obese pink starfish</p>
        <p class="tracking-widest">Patrick is an obese pink starfish</p>
        <p class="tracking-[.25em]">Patrick is an obese pink starfish</p>
      </div>

      <div>
        <h1>Line Height</h1>
        <h2 class="font-mono">leading-{size}</h2>
        <h3 class="font-mono">3|4|5|6|7|8|9|10</h3>
        <h3 class="font-mono">none|tight|snug|normal|relaxed|loose</h3>
        <div class="grid-col-1 grid gap-3 py-3">
          <p class="text-justify leading-3">{{ aboutPatrickStar }}</p>
          <p class="text-justify leading-4">{{ aboutPatrickStar }}</p>
          <p class="text-justify leading-5">{{ aboutPatrickStar }}</p>
          <p class="text-justify leading-6">{{ aboutPatrickStar }}</p>
          <p class="text-justify leading-7">{{ aboutPatrickStar }}</p>
          <p class="text-justify leading-8">{{ aboutPatrickStar }}</p>
          <p class="text-justify leading-9">{{ aboutPatrickStar }}</p>
        </div>
      </div>

      <div>
        <h1>Text Align</h1>
        <h2 class="font-mono">text-{alignment}</h2>
        <h3 class="font-mono">left|center|right|justify|</h3>
        <h3 class="font-mono">start|end</h3>
        <div class="grid-col-1 grid gap-3 py-3">
          <p class="text-left">{{ aboutPatrickStar }}</p>
          <p class="text-center">{{ aboutPatrickStar }}</p>
          <p class="text-right">{{ aboutPatrickStar }}</p>
          <p class="text-justify">{{ aboutPatrickStar }}</p>
        </div>
      </div>

      <div>
        <h1>Text Color</h1>
        <h2 class="font-mono">text-inherit, text-current, text-transparent, text-black, text-white</h2>
        <h2 class="font-mono">text-{color}-{50|100|200|300|400|500|600|700|800|900}</h2>
        <h3 class="font-mono">slate|gray|zinc|neutral|stone|red|</h3>
        <h3 class="font-mono">orange|amber|yellow|lime|green|emerald|</h3>
        <h3 class="font-mono">teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose</h3>
        <p class="text-sky-400">Patrick is an obese pink starfish</p>
        <p class="text-sky-400/100">Patrick is an obese pink starfish</p>
        <p class="text-sky-400/75">Patrick is an obese pink starfish</p>
        <p class="text-sky-400/50">Patrick is an obese pink starfish</p>
        <p class="text-sky-400/25">Patrick is an obese pink starfish</p>
        <p class="text-sky-400/0">Patrick is an obese pink starfish</p>
        <p class="text-[#50d71e]">Patrick is an obese pink starfish</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { aboutPatrickStar } from '@/spongeBob.js'
</script>
