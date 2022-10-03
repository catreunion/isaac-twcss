<template>
  <main>
    <h1>Border Width</h1>
    <h3>control the width of an element's borders</h3>
    <p>
      By default, Tailwind provides five border-width utilities, and the same number of utilities per side
      (horizontal, vertical, top, right, bottom, and left)
    </p>
    <br />

    <h3>all sides</h3>
    <p class="font-mono">border-{0|2|4|8}, border</p>
    <div class="border-0 border-sky-500"></div>
    <br />
    <div class="border-2 border-sky-500"></div>
    <br />
    <div class="border-4 border-sky-500"></div>
    <br />
    <div class="border-8 border-sky-500"></div>
    <br />

    <h3>individual sides</h3>
    <p class="font-mono">border-{t|r|b|l}-{0|2|4|8}, border-{t|r|b|l}</p>
    <div class="border-t-4 border-indigo-500"></div>
    <div class="border-r-4 border-indigo-500"></div>
    <div class="border-b-4 border-indigo-500"></div>
    <div class="border-l-4 border-indigo-500"></div>
    <br />

    <h3>horizontal and vertical sides</h3>
    <p class="font-mono">border-{x|y}-{0|2|4|8} border-{x|y}</p>
    <div class="border-x-4 border-indigo-500"></div>
    <div class="border-y-4 border-indigo-500"></div>
    <br />

    <div class="divide-y divide-slate-700">
      <p>add borders between child elements using the divide-{x/y}-{width} and divide-{color} utilities</p>
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    <br />

    <div class="border-t-[3px]"></div>
  </main>
</template>
