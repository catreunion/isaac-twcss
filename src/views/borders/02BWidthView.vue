<template>
  <main>
    <h1>Border Width</h1>
    <br />

    <h3>all sides</h3>
    <p class="font-mono">border-{0|2|4|8}, border</p>
    <div class="w-40 border-0 border-sky-500">A box</div>
    <div class="w-40 border-2 border-sky-500">A box</div>
    <div class="w-40 border-4 border-sky-500">A box</div>
    <div class="w-40 border-8 border-sky-500">A box</div>
    <br />

    <h3>horizontal and vertical sides</h3>
    <p class="font-mono">border-{x|y}-{0|2|4|8} border-{x|y}</p>
    <div class="w-40 border-x-8 border-indigo-500">A box</div>
    <br />
    <div class="w-40 border-y-8 border-indigo-500">A box</div>
    <br />

    <h3>individual sides</h3>
    <p class="font-mono">border-{t|r|b|l}-{0|2|4|8}, border-{t|r|b|l}</p>
    <div class="w-40 border-t-8 border-indigo-500">A box</div>
    <div class="w-40 border-r-8 border-indigo-500">A box</div>
    <div class="w-40 border-b-8 border-indigo-500">A box</div>
    <div class="w-40 border-l-8 border-indigo-500">A box</div>
    <br />

    <p>add borders between child elements using</p>
    <p class="font-mono">divide-{x/y}-{width} and divide-{color}</p>
    <div class="flex w-96 divide-x-8 divide-indigo-500">
      <div>Box 1</div>
      <div>Box 2</div>
      <div>Box 3</div>
      <div>Box 4</div>
    </div>
    <br />

    <div class="border-l-[10px]">A box</div>
  </main>
</template>
