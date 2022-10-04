<template>
  <main>
    <h1>Divide Width</h1>
    <h3>set the border width between elements</h3>
    <br />

    <h3>set borders between horizontal children</h3>
    <p class="font-mono">divide-x-{0|2|4|8}, divide-x</p>
    <div class="grid w-40 grid-cols-3 divide-x-4 divide-sky-500">
      <div>Box 1</div>
      <div>Box 2</div>
      <div>Box 3</div>
    </div>
    <br />

    <h3>set borders between stacked children</h3>
    <p class="font-mono">divide-y-{0|2|4|8}, divide-y</p>
    <div class="grid w-40 grid-cols-1 divide-y-4 divide-sky-500">
      <div>Box 1</div>
      <div>Box 2</div>
      <div>Box 3</div>
    </div>
    <br />

    <h3>reverse children order</h3>
    <p class="font-mono">divide-{x|y}-reverse</p>
    <div class="flex w-40 flex-col-reverse divide-y-4 divide-y-reverse divide-sky-500 hover:divide-pink-500">
      <div>Box 1</div>
      <div>Box 2</div>
      <div>Box 3</div>
    </div>
    <br />
    <div class="flex w-40 flex-row-reverse divide-x-4 divide-x-reverse divide-sky-500 hover:divide-pink-500">
      <div>Box 1</div>
      <div>Box 2</div>
      <div>Box 3</div>
    </div>
    <br />

    <h1>Divide Color</h1>
    <h3>control the border color between elements</h3>
    <p class="font-mono">divide-inherit, divide-current, divide-transparent</p>
    <p class="font-mono">divide-black, divide-white</p>
    <p class="font-mono">divide-{color}-{50|100|200|300|400|500|600|700|800|900}</p>

    <p class="font-mono">color : slate|gray|zinc|neutral|stone|red|orange|</p>
    <p class="font-mono">color : amber|yellow|lime|green|emerald|teal|cyan|</p>
    <p class="font-mono">color : sky|blue|indigo|violet|purple|fuchsia|pink|rose</p>
  </main>
</template>

<script setup></script>
