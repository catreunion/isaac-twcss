<template>
  <main>
    <h1>Border Style</h1>
    <br />

    <p class="font-mono">border-{style}</p>
    <p class="font-mono">border-solid, border-dashed, border-dotted</p>
    <p class="font-mono">border-double, border-hidden, border-none</p>

    <div class="w-40 border-2 border-solid border-sky-500">A box</div>
    <br />
    <div class="w-40 border-2 border-dashed border-sky-500">A box</div>
    <br />
    <div class="w-40 border-2 border-dotted border-sky-500">A box</div>
    <br />
    <div class="w-40 border-4 border-double border-sky-500">A box</div>
    ​<br />
    <button class="border-4 border-solid border-sky-500 p-2 hover:border-dotted">Click me</button>
  </main>
</template>

<script setup></script>
