<template>
  <main>
    <h1>Border Color</h1>
    <br />

    <p class="font-mono">border-inherit, border-current, border-transparent</p>
    <p class="font-mono">border-black, border-white</p>
    <p class="font-mono">border-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <p class="font-mono">color : slate|gray|zinc|neutral|stone|red|orange|</p>
    <p class="font-mono">color : amber|yellow|lime|green|emerald|teal|cyan|</p>
    <p class="font-mono">color : sky|blue|indigo|violet|purple|fuchsia|pink|rose</p>

    <div class="w-80 border-8 border-indigo-500/100">A box</div>
    <div class="w-80 border-8 border-indigo-500/75">A box</div>
    <div class="w-80 border-8 border-indigo-500/50">A box</div>
    <button class="border-8 border-indigo-500 p-2 hover:border-indigo-300">Send email</button>
    <br />
    <br />

    <p>horizontal and vertical sides</p>
    <p class="font-mono">border-{x|y}-inherit, border-{x|y}-current, border-{x|y}-transparent</p>
    <p class="font-mono">border-{x|y}-black, border-{x|y}-white</p>
    <p class="font-mono">border-{x|y}-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <div class="w-80 border-8 border-x-indigo-500">A box</div>
    <br />
    <div class="w-80 border-8 border-y-indigo-500">A box</div>
    <br />

    <p>individual sides</p>
    <p class="font-mono">border-{t|r|b|l}-inherit, border-{t|r|b|l}-current</p>
    <p class="font-mono">border-{t|r|b|l}-transparent</p>
    <p class="font-mono">border-{t|r|b|l}-black, border-{t|r|b|l}-white</p>
    <p class="font-mono">border-{t|r|b|l}-{color}-{50|100|200|300|400|500|600|700|800|900}</p>
    <div class="w-80 border-8 border-t-indigo-500">A box</div>
    <div class="w-80 border-8 border-r-indigo-500">A box</div>
    <div class="w-80 border-8 border-b-indigo-500">A box</div>
    <div class="w-80 border-8 border-l-indigo-500">A box</div>
  </main>
</template>
