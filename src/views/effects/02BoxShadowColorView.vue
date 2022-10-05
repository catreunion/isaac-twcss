<template>
  <main>
    <h1>Box Shadow Color</h1>
    <h3>set the color of a box shadow</h3>
    <p class="font-mono">shadow-inherit|shadow-current|shadow-transparent</p>
    <p class="font-mono">shadow-black|shadow-white</p>
    <p class="font-mono">shadow-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <p class="font-mono">color : slate|gray|zinc|neutral|stone|red|orange|</p>
    <p class="font-mono">color : amber|yellow|lime|green|emerald|teal|cyan|</p>
    <p class="font-mono">color : sky|blue|indigo|violet|purple|fuchsia|pink|rose</p>
    <br />

    <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300">Subscribe</button>
    <button class="bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-300">Subscribe</button>
    <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-300">Subscribe</button>
    <br />
    <br />

    <button class="shadow-lg">Subscribe</button>
    <button class="shadow-lg shadow-indigo-500/40">Subscribe</button>
    <button class="shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40"></button>
    <br />

    <button class="shadow-[#50d71e]"></button>
  </main>
</template>

<script setup></script>
