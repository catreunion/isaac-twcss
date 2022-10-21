<template>
  <main class="w-96">
    <div class="grid grid-cols-1 gap-6 py-6">
      <!-- Font Family -->
      <div>
        <h1>Font Family</h1>
        <h2 class="font-mono">font-{sans|serif|mono}</h2>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="font-sans">{{ aboutPatrickShort }}</p>
          <p class="font-serif">{{ aboutPatrickShort }}</p>
          <p class="font-mono">{{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Font Size -->
      <div>
        <h1>Font Size</h1>
        <h2 class="font-mono">text-{size}</h2>
        <h3 class="font-mono">xs|sm|base|lg|xl|</h3>
        <h3 class="font-mono">2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="text-xs">xs : {{ aboutPatrickShort }}</p>
          <p class="text-sm">sm : {{ aboutPatrickShort }}</p>
          <p class="text-base">base : {{ aboutPatrickShort }}</p>
          <p class="text-lg">lg : {{ aboutPatrickShort }}</p>
          <p class="text-xl">xl : {{ aboutPatrickShort }}</p>
          <p class="text-[14px]">14px : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Font Smoothing -->
      <div>
        <h1>Font Smoothing</h1>
        <h2 class="font-mono">antialiased|subh3ixel-antialiased</h2>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="subpixel-antialiased hover:antialiased">{{ aboutPatrickShort }}</p>
          <p class="antialiased hover:subpixel-antialiased">{{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Font Style -->
      <div>
        <h1>Font Style</h1>
        <h2 class="font-mono">italic|not-italic</h2>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="italic hover:not-italic">{{ aboutPatrickShort }}</p>
          <p class="not-italic hover:italic">{{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Font Weight -->
      <div>
        <h1>Font Weight</h1>
        <h2 class="font-mono">font-{weight}</h2>
        <h3 class="font-mono">thin|extralight|light|normal|</h3>
        <h3 class="font-mono">medium|semibold|bold|extrabold|black</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="font-thin">thin : {{ aboutPatrickShort }}</p>
          <p class="font-extralight">extralight : {{ aboutPatrickShort }}</p>
          <p class="font-light">light : {{ aboutPatrickShort }}</p>
          <p class="font-normal">normal : {{ aboutPatrickShort }}</p>
          <p class="font-medium">medium : {{ aboutPatrickShort }}</p>
          <p class="font-semibold">semibold : {{ aboutPatrickShort }}</p>
          <p class="font-bold">bold : {{ aboutPatrickShort }}</p>
          <p class="font-extrabold">extrabold : {{ aboutPatrickShort }}</p>
          <p class="font-black">black : {{ aboutPatrickShort }}</p>
          <p class="font-[1100]">1100 : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Letter Spacing -->
      <div>
        <h1>Letter Spacing</h1>
        <h2 class="font-mono">tracking-{size}</h2>
        <h3 class="font-mono">tighter|tight|normal|wide|wider|widest</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="tracking-tighter">tighter : {{ aboutPatrickShort }}</p>
          <p class="tracking-tight">tight : {{ aboutPatrickShort }}</p>
          <p class="tracking-normal">normal : {{ aboutPatrickShort }}</p>
          <p class="tracking-wide">wide : {{ aboutPatrickShort }}</p>
          <p class="tracking-wider">wider : {{ aboutPatrickShort }}</p>
          <p class="tracking-widest">widest : {{ aboutPatrickShort }}</p>
          <p class="tracking-[.2em]">[.2em] : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Line Height -->
      <div>
        <h1>Line Height</h1>
        <h2 class="font-mono">leading-{size}</h2>
        <h3 class="font-mono">3|4|5|6|7|8|9|10|</h3>
        <h3 class="font-mono">none|tight|snug|normal|relaxed|loose</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="text-justify leading-3">3 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-4">4 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-5">5 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-6">6 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-7">7 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-8">8 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-9">9 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-10">10 : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-none">none : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-tight">tight : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-snug">snug : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-normal">normal : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-relaxed">relaxed : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-loose">loose : {{ aboutPatrickShort }}</p>
          <p class="text-justify leading-[2rem]">2rem : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Align -->
      <div>
        <h1>Text Align</h1>
        <h2 class="font-mono">text-{alignment}</h2>
        <h3 class="font-mono">left|center|right|justify|start|end</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="text-left">{{ aboutPatrickShort }}</p>
          <p class="text-center">{{ aboutPatrickShort }}</p>
          <p class="text-right">{{ aboutPatrickShort }}</p>
          <p class="text-justify">justify : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Color -->
      <div>
        <h1>Text Color</h1>
        <h2 class="font-mono">text-{color}</h2>
        <h2 class="font-mono">inherit|current|transparent|black|white</h2>
        <h2 class="font-mono">50|100|200|300|400|500|600|700|800|900</h2>
        <h3 class="font-mono">slate|gray|zinc|neutral|stone|red|</h3>
        <h3 class="font-mono">orange|amber|yellow|lime|green|emerald|</h3>
        <h3 class="font-mono">teal|cyan|sky|blue|indigo|violet|purple|</h3>
        <h3 class="font-mono">fuchsia|pink|rose</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="text-indigo-500 hover:text-rose-500">{{ aboutPatrickShort }}</p>
          <p class="text-indigo-500/100">100 : {{ aboutPatrickShort }}</p>
          <p class="text-indigo-500/75">75 : {{ aboutPatrickShort }}</p>
          <p class="text-indigo-500/50">50 : {{ aboutPatrickShort }}</p>
          <p class="text-indigo-500/25">25 : {{ aboutPatrickShort }}</p>
          <p class="text-indigo-500/0">0 : {{ aboutPatrickShort }}</p>
          <p class="text-[#50d71e]">#50d71e : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Decoration -->
      <div>
        <h1>Text Decoration</h1>
        <h2 class="font-mono">underline|no-underline|</h2>
        <h2 class="font-mono">line-through|overline</h2>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="underline">{{ aboutPatrickShort }}</p>
          <p class="no-underline">{{ aboutPatrickShort }}</p>
          <p class="line-through">{{ aboutPatrickShort }}</p>
          <p class="overline">{{ aboutPatrickShort }}</p>
          <a href="#" class="underline hover:no-underline">Link</a>
        </div>
      </div>

      <!-- Text Decoration Color -->
      <div>
        <h1>Text Decoration Color</h1>
        <h2 class="font-mono">decoration-{color}</h2>
        <h2 class="font-mono">inherit|current|transparent|black|white</h2>
        <h2 class="font-mono">50|100|200|300|400|500|600|700|800|900</h2>
        <h3 class="font-mono">slate|gray|zinc|neutral|stone|red|</h3>
        <h3 class="font-mono">orange|amber|yellow|lime|green|emerald|</h3>
        <h3 class="font-mono">teal|cyan|sky|blue|indigo|violet|purple|</h3>
        <h3 class="font-mono">fuchsia|pink|rose</h3>
        <p class="py-3 underline decoration-pink-500">{{ aboutPatrickShort }}</p>
      </div>

      <!-- Text Decoration Style -->
      <div>
        <h1>Text Decoration Style</h1>
        <h2 class="font-mono">decoration-{style}</h2>
        <h3 class="font-mono">solid|double|dotted|dashed|wavy</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="underline decoration-purple-500 decoration-solid">{{ aboutPatrickShort }}</p>
          <p class="underline decoration-purple-500 decoration-double">{{ aboutPatrickShort }}</p>
          <p class="underline decoration-purple-500 decoration-dotted">{{ aboutPatrickShort }}</p>
          <p class="underline decoration-purple-500 decoration-dashed">{{ aboutPatrickShort }}</p>
          <p class="underline decoration-purple-500 decoration-wavy">{{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Decoration Thickness -->
      <div>
        <h1>Text Decoration Thickness</h1>
        <h2 class="font-mono">decoration-{width}</h2>
        <h3 class="font-mono">auto|from-font|0|1|2|4|8</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="underline decoration-auto">auto : {{ aboutPatrickShort }}</p>
          <p class="underline decoration-from-font">from-font : {{ aboutPatrickShort }}</p>
          <p class="underline decoration-0">0 : {{ aboutPatrickShort }}</p>
          <p class="underline decoration-1">1 : {{ aboutPatrickShort }}</p>
          <p class="underline decoration-2">2 : {{ aboutPatrickShort }}</p>
          <p class="underline decoration-4">4 : {{ aboutPatrickShort }}</p>
          <p class="underline decoration-8">8 : {{ aboutPatrickShort }}</p>
          <p class="underline decoration-[3px]">3px : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Underline Offset -->
      <div>
        <h1>Text Underline Offset</h1>
        <h2 class="font-mono">underline-offset-{width}</h2>
        <h3 class="font-mono">auto|0|1|2|4|8</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="underline underline-offset-auto">auto : {{ aboutPatrickShort }}</p>
          <p class="underline underline-offset-0">0 : {{ aboutPatrickShort }}</p>
          <p class="underline underline-offset-1">1 : {{ aboutPatrickShort }}</p>
          <p class="underline underline-offset-2">2 : {{ aboutPatrickShort }}</p>
          <p class="underline underline-offset-4">4 : {{ aboutPatrickShort }}</p>
          <p class="underline underline-offset-8">8 : {{ aboutPatrickShort }}</p>
          <p class="underline underline-offset-[3px]">3px : {{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Transform -->
      <div>
        <h1>Text Transform</h1>
        <h2 class="font-mono">uppercase|lowercase|capitalize|normal-case</h2>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="uppercase">{{ aboutPatrickShort }}</p>
          <p class="lowercase">{{ aboutPatrickShort }}</p>
          <p class="capitalize">{{ aboutPatrickShort }}</p>
          <p class="normal-case">{{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Overflow -->
      <div>
        <h1>Text Overflow</h1>
        <h2 class="font-mono">truncate|text-ellipsis|text-clip</h2>
        <div class="grid grid-cols-1 gap-3 py-3">
          <p class="truncate">{{ aboutPatrickShort }}</p>
          <p class="overflow-hidden text-ellipsis">{{ aboutPatrickShort }}</p>
          <p class="overflow-hidden text-clip">{{ aboutPatrickShort }}</p>
        </div>
      </div>

      <!-- Text Indent -->
      <div>
        <h1>Text Indent</h1>
        <h2 class="font-mono">indent-{width}</h2>
        <h3 class="font-mono">0|px|0.5|1|1.5|2|2.5|3|3.5|</h3>
        <h3 class="font-mono">4|5|6|7|8|9|10|11|12|14|16|</h3>
        <h3 class="font-mono">20|24|28|32|36|40|44|48|52|56|</h3>
        <h3 class="font-mono">60|64|72|80|96</h3>
        <p class="indent-8">8 : {{ aboutPatrickShort }}</p>
        <p class="indent-[20%]">20% : {{ aboutPatrickShort }}</p>
      </div>

      <!-- Vertical Align -->
      <div>
        <h1>Vertical Align</h1>
        <h2 class="font-mono">align-{alignment}</h2>
        <h3 class="font-mono">baseline|top|middle|bottom|</h3>
        <h3 class="font-mono">text-top|text-bottom|sub|super</h3>
        <span class="inline-block h-20 border-2 border-indigo-500 align-baseline">
          align-baseline : align the baseline of an element with the baseline of its parent
        </span>
        <p class="inline-block h-20 border-2 border-indigo-500 align-top">
          align-top : align the top of an element and its descendants with the top of the entire line
        </p>
        <p class="inline-block h-20 border-2 border-indigo-500 align-middle">
          align-middle : align the middle of an element with the baseline plus half the x-height of the parent
        </p>
        <p class="inline-block h-20 border-2 border-indigo-500 align-bottom">
          align-bottom : align the bottom of an element and its descendants with the bottom of the entire line
        </p>
        <p class="inline-block h-20 border-2 border-indigo-500 align-text-top">
          align-text-top : align the top of an element with the top of the parent element’s font
        </p>
        <p class="inline-block h-20 border-2 border-indigo-500 align-text-bottom">
          align-text-bottom : align the bottom of an element with the bottom of the parent element’s font
        </p>
        <p class="h-20 border-2 border-indigo-500 align-[4px]">{{ aboutPatrickShort }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { aboutPatrickShort } from '@/items/spongeBob'
</script>
