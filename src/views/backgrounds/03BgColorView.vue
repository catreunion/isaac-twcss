<template>
  <main>
    <h1>Background Color</h1>
    <h3>set an element's background color</h3>
    <p class="font-mono">bg-inherit, bg-current, bg-transparent, bg-black, bg-white</p>
    <p class="font-mono">bg-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <p>
      color can be : slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald,
      teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    </p>
    <br />
    <button class="bg-indigo-500">Save</button>
    <button class="bg-sky-500/100">Save</button>
    <button class="bg-sky-500/75">Save</button>
    <button class="bg-sky-500/50">Save</button>
    <button class="bg-orange-500 hover:bg-orange-300">Save</button>
    <button class="bg-[#50d71e]">Save</button>
  </main>
</template>

<script setup></script>
