<template>
  <main>
    <h1>Border Color</h1>
    <h3>set the border color of an element</h3>
    <br />

    <p>all sides</p>
    <p class="font-mono">border-inherit, border-current, border-transparent, border-black, border-white</p>
    <p class="font-mono">border-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <p class="font-mono">color : slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|</p>
    <p class="font-mono">color : green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose</p>
    <div class="border-8 border-indigo-500/100"></div>
    <div class="border-8 border-indigo-500/75"></div>
    <div class="border-8 border-indigo-500/50"></div>
    <button class="border-8 border-indigo-500 p-2 hover:border-indigo-300">Send email</button>
    <br />
    <br />

    <p>horizontal and vertical sides</p>
    <p class="font-mono">border-{x|y}-inherit, border-{x|y}-current, border-{x|y}-transparent</p>
    <p class="font-mono">border-{x|y}-black, border-{x|y}-white</p>
    <p class="font-mono">border-{x|y}-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <div class="border-8 border-indigo-200 border-x-indigo-500"></div>
    <div class="border-8 border-indigo-200 border-y-indigo-500"></div>
    <br />

    <p>individual sides</p>
    <p class="font-mono">border-{t|r|b|l}-inherit, border-{t|r|b|l}-current, border-{t|r|b|l}-transparent</p>
    <p class="font-mono">border-{t|r|b|l}-black, border-{t|r|b|l}-white</p>
    <p class="font-mono">border-{t|r|b|l}-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <div class="border-8 border-indigo-200 border-t-indigo-500"></div>
    <div class="border-8 border-indigo-200 border-r-indigo-500"></div>
    <div class="border-8 border-indigo-200 border-b-indigo-500"></div>
    <div class="border-8 border-indigo-200 border-l-indigo-500"></div>
  </main>
</template>
