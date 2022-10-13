<template>
  <main>
    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h1>Font Family</h1>
        <h2 class="font-mono">font-{sans|serif|mono}</h2>
        <p class="font-sans">sans : {{ aboutPatrickShort }}</p>
        <p class="font-serif">serif : {{ aboutPatrickShort }}</p>
        <p class="font-mono">mono : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Font Size</h1>
        <h2 class="font-mono">text-{size}</h2>
        <h3 class="font-mono">xs|sm|base|lg|xl|</h3>
        <h3 class="font-mono">2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl</h3>
        <p class="text-xs">xs : {{ aboutPatrickShort }}</p>
        <p class="text-sm">sm : {{ aboutPatrickShort }}</p>
        <p class="text-base">base : {{ aboutPatrickShort }}</p>
        <p class="text-lg">lg : {{ aboutPatrickShort }}</p>
        <p class="text-xl">xl : {{ aboutPatrickShort }}</p>
        <p class="text-2xl">2xl : {{ aboutPatrickShort }}</p>
        <p class="text-[14px]">14px : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Font Smoothing</h1>
        <h2 class="font-mono">antialiased|subh3ixel-antialiased</h2>
        <p class="subpixel-antialiased hover:antialiased">subpixel-antialiased : {{ aboutPatrickShort }}</p>
        <p class="antialiased hover:subpixel-antialiased">antialiased : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Font Style</h1>
        <h2 class="font-mono">italic|not-italic</h2>
        <p class="italic hover:not-italic">italic : {{ aboutPatrickShort }}</p>
        <p class="not-italic hover:italic">not-italic : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Font Weight</h1>
        <h2 class="font-mono">font-{weight}</h2>
        <h3 class="font-mono">thin|extralight|light|normal|</h3>
        <h3 class="font-mono">medium|semibold|bold|extrabold|black</h3>
        <p class="font-thin">thin : {{ aboutPatrickShort }}</p>
        <p class="font-extralight">extralight : {{ aboutPatrickShort }}</p>
        <p class="font-light">light : {{ aboutPatrickShort }}</p>
        <p class="font-normal">normal : {{ aboutPatrickShort }}</p>
        <p class="font-medium">medium : {{ aboutPatrickShort }}</p>
        <p class="font-semibold">semibold : {{ aboutPatrickShort }}</p>
        <p class="font-bold">bold : {{ aboutPatrickShort }}</p>
        <p class="font-extrabold">extrabold : {{ aboutPatrickShort }}</p>
        <p class="font-black">black : {{ aboutPatrickShort }}</p>
        <p class="font-[1100]">[1100] : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Letter Spacing</h1>
        <h2 class="font-mono">tracking-{size}</h2>
        <h3 class="font-mono">tighter|tight|normal|</h3>
        <h3 class="font-mono">wide|wider|widest</h3>
        <p class="tracking-tighter">tighter : {{ aboutPatrickShort }}</p>
        <p class="tracking-tight">tight : {{ aboutPatrickShort }}</p>
        <p class="tracking-normal">normal : {{ aboutPatrickShort }}</p>
        <p class="tracking-wide">wide : {{ aboutPatrickShort }}</p>
        <p class="tracking-wider">wider : {{ aboutPatrickShort }}</p>
        <p class="tracking-widest">widest : {{ aboutPatrickShort }}</p>
        <p class="tracking-[.25em]">[.25em] : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Line Height</h1>
        <h2 class="font-mono">leading-{size}</h2>
        <h3 class="font-mono">3|4|5|6|7|8|9|10</h3>
        <h3 class="font-mono">none|tight|snug|normal|relaxed|loose</h3>
        <p class="leading-3">3 : {{ aboutPatrickShort }}</p>
        <p class="leading-4">4 : {{ aboutPatrickShort }}</p>
        <p class="leading-5">5 : {{ aboutPatrickShort }}</p>
        <p class="leading-6">6 : {{ aboutPatrickShort }}</p>
        <p class="leading-7">7 : {{ aboutPatrickShort }}</p>
        <p class="leading-8">8 : {{ aboutPatrickShort }}</p>
        <p class="leading-9">9 : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Text Align</h1>
        <h2 class="font-mono">text-{alignment}</h2>
        <h3 class="font-mono">left|center|right|justify|</h3>
        <h3 class="font-mono">start|end</h3>
        <p class="text-left">{{ aboutPatrickShort }}</p>
        <p class="text-center">{{ aboutPatrickShort }}</p>
        <p class="text-right">{{ aboutPatrickShort }}</p>
        <p class="text-justify">justify : {{ aboutPatrickShort }}</p>
      </div>

      <div>
        <h1>Text Color</h1>
        <h2 class="font-mono">text-inherit, text-current, text-transparent, text-black, text-white</h2>
        <h2 class="font-mono">text-{color}-{50|100|200|300|400|500|600|700|800|900}</h2>
        <h3 class="font-mono">slate|gray|zinc|neutral|stone|red|</h3>
        <h3 class="font-mono">orange|amber|yellow|lime|green|emerald|</h3>
        <h3 class="font-mono">teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose</h3>
        <p class="text-sky-400">{{ aboutPatrickShort }}</p>
        <p class="text-sky-400/100">100 : {{ aboutPatrickShort }}</p>
        <p class="text-sky-400/75">75 : {{ aboutPatrickShort }}</p>
        <p class="text-sky-400/50">50 : {{ aboutPatrickShort }}</p>
        <p class="text-sky-400/25">25 : {{ aboutPatrickShort }}</p>
        <p class="text-sky-400/0">0 : {{ aboutPatrickShort }}</p>
        <p class="text-[#50d71e]">[#50d71e] : {{ aboutPatrickShort }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { aboutPatrickShort } from '@/spongeBob'
</script>
