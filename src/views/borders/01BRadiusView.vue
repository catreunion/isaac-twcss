<template>
  <main class="w-96">
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Border Radius -->
      <div>
        <h1>Border Radius</h1>
        <h2 class="font-mono">none|sm|md|lg|xl|2xl|3xl|full</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">rounded-{t|r|b|l}-{size}</h3>
            <div class="grid w-72 grid-cols-2 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <button class="rounded-t-2xl bg-indigo-200 p-2">Send</button>
              <button class="rounded-r-2xl bg-indigo-200 p-2">Send</button>
              <button class="rounded-b-2xl bg-indigo-200 p-2">Send</button>
              <button class="rounded-l-2xl bg-indigo-200 p-2">Send</button>
              <button class="rounded-none bg-indigo-200 p-2">Send</button>
              <button class="rounded-full bg-indigo-200 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">rounded-{tl|tr|br|bl}-{size}</h3>
            <div class="grid w-72 grid-cols-2 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <button class="rounded-tl-2xl bg-indigo-200 p-2">Send</button>
              <button class="rounded-tr-2xl bg-indigo-200 p-2">Send</button>
              <button class="rounded-bl-2xl bg-indigo-200 p-2">Send</button>
              <button class="rounded-br-2xl bg-indigo-200 p-2">Send</button>
            </div>
          </div>

          <div class="flex w-72 justify-center border-2 border-pink-500 p-2">
            <button class="rounded-[12px] bg-indigo-200 p-2">Send</button>
          </div>
        </div>
      </div>

      <!-- Border Width -->
      <div>
        <h1>Border Width</h1>
        <h2 class="font-mono">0|2|4|8</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">border-{size}</h3>
            <div class="w-72 border-2 border-pink-500 p-2">
              <button class="border-2 border-indigo-500 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{x|y}-{size}</h3>
            <div class="grid w-72 grid-cols-2 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <button class="border-x-2 border-indigo-500 p-2">Send</button>
              <button class="border-y-2 border-indigo-500 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{t|r|b|l}-{size}</h3>
            <div class="grid w-72 grid-cols-4 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <button class="border-t-2 border-indigo-500 p-2">Send</button>
              <button class="border-r-2 border-indigo-500 p-2">Send</button>
              <button class="border-b-2 border-indigo-500 p-2">Send</button>
              <button class="border-l-2 border-indigo-500 p-2">Send</button>
            </div>
          </div>

          <div>
            <p>add borders between child elements using</p>
            <h3 class="font-mono">divide-{x/y}-{width} and divide-{color}</h3>
            <div class="grid w-72 grid-rows-4 divide-y-2 divide-indigo-500 border-2 border-pink-500 p-2">
              <button>Send</button>
              <button>Send</button>
              <button>Send</button>
              <button>Send</button>
            </div>
          </div>

          <div class="border-l-[10px]">Send</div>
        </div>
      </div>

      <!-- Border Color -->
      <div>
        <h1>Border Color</h1>
        <h2 class="font-mono">slate|gray|zinc|neutral|stone|red|orange|</h2>
        <h2 class="font-mono">amber|yellow|lime|green|emerald|teal|cyan|</h2>
        <h2 class="font-mono">sky|blue|indigo|violet|purple|fuchsia|pink|rose</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">border-inherit|current|transparent|black|white</h3>
            <h3 class="font-mono">border-{color}-{50|100|200|300|400|500|600|700|800|900}</h3>
            <div class="grid w-72 grid-cols-3 justify-items-center border-2 border-pink-500 p-2">
              <button class="border-2 border-indigo-500/100 p-2">Send</button>
              <button class="border-2 border-indigo-500/75 p-2">Send</button>
              <button class="border-2 border-indigo-500/50 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{x|y}-inherit|current|transparent|black|white</h3>
            <h3 class="font-mono">border-{x|y}-{color}-{50|100|200|300|400|500|600|700|800|900}</h3>
            <div class="grid w-72 grid-cols-2 justify-items-center border-2 border-pink-500 p-2">
              <button class="border-2 border-x-indigo-500/100 p-2">Send</button>
              <button class="border-2 border-indigo-500/50 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{t|r|b|l}-inherit|current|transparent|black|white</h3>
            <h3 class="font-mono">border-{t|r|b|l}-{color}-{50|100|200|300|400|500|600|700|800|900}</h3>
            <div class="grid w-96 grid-cols-4 justify-items-center border-2 border-pink-500 p-2">
              <button class="border-2 border-t-indigo-500 p-2">Send</button>
              <button class="border-2 border-r-indigo-500 p-2">Send</button>
              <button class="border-2 border-b-indigo-500 p-2">Send</button>
              <button class="border-2 border-l-indigo-500 p-2">Send</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Border Style -->
      <div>
        <h1>Border Style</h1>
        <h2 class="font-mono">border-{style}</h2>
        <h3 class="font-mono">solid|dashed|dotted|double|hidden|none</h3>

        <div class="grid w-96 grid-cols-4 justify-items-center border-2 border-pink-500 p-2">
          <button class="border-2 border-solid border-indigo-500 p-2">Send</button>
          <button class="border-2 border-dashed border-indigo-500 p-2">Send</button>
          <button class="border-2 border-dotted border-indigo-500 p-2">Send</button>
          <button class="border-4 border-double border-indigo-500 p-2">Send</button>
        </div>
      </div>
    </div>
  </main>
</template>
