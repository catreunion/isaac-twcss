<template>
  <main>
    <h1>Outline Width</h1>
    <h3>set the width of an element's outline</h3>
    <p class="font-mono">outline-{0|1|2|4|8}</p>
    <p class="font-mono">outline-inherit, outline-current, outline-transparent</p>
    <p class="font-mono">outline-black, outline-white</p>
    <br />

    <h1>Outline Color</h1>
    <h3>set the color of an element's outline</h3>
    <p class="font-mono">outline-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <p class="font-mono">color : slate|gray|zinc|neutral|stone|red|orange|</p>
    <p class="font-mono">color : amber|yellow|lime|green|emerald|teal|cyan|</p>
    <p class="font-mono">color : sky|blue|indigo|violet|purple|fuchsia|pink|rose</p>
    <br />

    <button class="p-2 outline outline-1 outline-offset-2 outline-blue-500">Button A</button>
    <button class="p-2 outline outline-2 outline-offset-2 outline-cyan-500">Button B</button>
    <button class="p-2 outline outline-4 outline-offset-2 outline-pink-500">Button C</button>
    <div class="outline-[10px]"></div>
    <br />

    <h1>Outline Style</h1>
    <h3>set the style of an element's outline</h3>
    <p class="font-mono">outline-none, outline-offset, outline-dashed</p>
    <p class="font-mono">outline-dotted, outline-double, outline-hidden</p>
    <button class="p-2 outline outline-2 outline-offset-2">Button A</button>
    <button class="p-2 outline-dashed outline-2 outline-offset-2">Button B</button>
    <button class="p-2 outline-dotted outline-2 outline-offset-2">Button C</button>
    <button class="outline-3 p-2 outline-double outline-offset-2">Button D</button>
  </main>
</template>

<script setup></script>
