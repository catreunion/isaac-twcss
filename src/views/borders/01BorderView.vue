<template>
  <main class="w-96">
    <div class="grid-col-1s grid gap-6 py-6">
      <!-- Border Radius -->
      <div>
        <h1>Border Radius</h1>
        <h2 class="font-mono">none|sm|md|lg|xl|2xl|3xl|full</h2>

        <div class="grid grid-cols-1 gap-3 py-3">
          <div>
            <h3 class="font-mono">rounded-{size}</h3>
            <p>for all corners of an element</p>
            <div class="grid w-72 grid-cols-3 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <div class="h-10 w-10 rounded bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-none bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-sm bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-md bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-lg bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-xl bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-2xl bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-3xl bg-indigo-500 p-2"></div>
              <div class="h-10 w-10 rounded-full bg-indigo-500 p-2"></div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">rounded-{t|r|b|l}-{size}</h3>
            <p>for one side of an element</p>
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
            <p>for one corner of an element</p>
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

        <div class="grid grid-cols-1 gap-3 py-3">
          <div>
            <h3 class="font-mono">border-{size}</h3>
            <p>set border width for all sides of an element</p>
            <div class="grid w-72 grid-cols-2 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <button class="border-0 border-indigo-500 p-2">border-0</button>
              <button class="border-2 border-indigo-500 p-2">border-2</button>
              <button class="border-4 border-indigo-500 p-2">border-4</button>
              <button class="border-8 border-indigo-500 p-2">border-8</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{x|y}-{size}</h3>
            <p>set border width for the horizontal/vertical sides</p>
            <div class="grid w-72 grid-cols-2 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <button class="border-x-2 border-indigo-500 p-2">Send</button>
              <button class="border-y-2 border-indigo-500 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{t|r|b|l}-{size}</h3>
            <p>set border width for one side of an element</p>
            <div class="grid w-72 grid-cols-4 justify-items-center gap-2 border-2 border-pink-500 p-2">
              <button class="border-t-2 border-indigo-500 p-2">Send</button>
              <button class="border-r-2 border-indigo-500 p-2">Send</button>
              <button class="border-b-2 border-indigo-500 p-2">Send</button>
              <button class="border-l-2 border-indigo-500 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">divide-{x/y}-{size} divide-{color}</h3>
            <p>add borders between child elements</p>
            <div class="grid w-72 grid-rows-4 divide-y-2 divide-indigo-500 border-2 border-pink-500">
              <button class="py-2">Send</button>
              <button class="py-2">Send</button>
              <button class="py-2">Send</button>
              <button class="py-2">Send</button>
            </div>
          </div>

          <div>
            <p>arbitrary values</p>
            <div class="border-l-[10px] border-indigo-500 p-2">Send</div>
          </div>
        </div>
      </div>

      <!-- Border Color -->
      <div>
        <h1>Border Color</h1>
        <h2 class="font-mono">inherit|current|transparent|black|white</h2>
        <h2 class="font-mono">50|100|200|300|400|500|600|700|800|900</h2>
        <h2 class="font-mono">slate|gray|zinc|neutral|stone|red|orange|</h2>
        <h2 class="font-mono">amber|yellow|lime|green|emerald|teal|cyan|</h2>
        <h2 class="font-mono">sky|blue|indigo|violet|purple|fuchsia|pink|rose</h2>

        <div class="grid grid-cols-1 gap-3 py-3">
          <div>
            <h3 class="font-mono">border-{color}</h3>
            <p>set border color of an element</p>
            <div class="grid w-72 grid-cols-3 justify-items-center border-2 border-pink-500 p-2">
              <button class="border-2 border-indigo-500/100 p-2">Send</button>
              <button class="border-2 border-indigo-500/75 p-2">Send</button>
              <button class="border-2 border-indigo-500/50 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{x|y}-{color}</h3>
            <p>set border color for the horizontal/vertical sides</p>
            <div class="grid w-72 grid-cols-2 justify-items-center border-2 border-pink-500 p-2">
              <button class="border-2 border-x-indigo-500/100 p-2">Send</button>
              <button class="border-2 border-indigo-500/50 p-2">Send</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">border-{t|r|b|l}-{color}</h3>
            <p>set border color for one side of an element</p>
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
          <button class="border-2 border-solid border-indigo-500 p-2">solid</button>
          <button class="border-2 border-dashed border-indigo-500 p-2">dashed</button>
          <button class="border-2 border-dotted border-indigo-500 p-2">dotted</button>
          <button class="border-4 border-double border-indigo-500 p-2">double</button>
          <button class="border-2 border-hidden border-indigo-500 p-2">hidden</button>
          <button class="border-4 border-none border-indigo-500 p-2">none</button>
        </div>
      </div>

      <!-- Divide Width -->
      <div>
        <h1>Divide Width</h1>
        <h2 class="font-mono">divide-{x/y}-{size} divide-{color}</h2>
        <div class="grid grid-cols-1 gap-3 py-3">
          <div>
            <h3 class="font-mono">divide-x-{0|2|4|8}</h3>
            <p>add borders between horizontal elements</p>
            <div class="grid w-72 grid-cols-3 divide-x-2 divide-indigo-500 border-2 border-pink-500 p-2">
              <button>Button 1</button>
              <button>Button 2</button>
              <button>Button 3</button>
            </div>
          </div>

          <div>
            <h3 class="font-mono">divide-y-{0|2|4|8}</h3>
            <p>add borders between vertical elements</p>
            <div class="grid w-72 grid-rows-3 divide-y-2 divide-indigo-500 border-2 border-pink-500 px-2">
              <div class="py-2">File</div>
              <div class="py-2">Edit</div>
              <div class="py-2">View</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divide Color -->
      <div>
        <h1>Divide Color</h1>
        <h2 class="font-mono">inherit|current|transparent|black|white</h2>
        <h2 class="font-mono">50|100|200|300|400|500|600|700|800|900</h2>
        <h2 class="font-mono">slate|gray|zinc|neutral|stone|red|orange|</h2>
        <h2 class="font-mono">amber|yellow|lime|green|emerald|teal|cyan|</h2>
        <h2 class="font-mono">sky|blue|indigo|violet|purple|fuchsia|pink|rose</h2>
      </div>

      <!-- Divide Style -->
      <div>
        <h1>Divide Style</h1>
        <h2 class="font-mono">divide-{style}</h2>
        <h3 class="font-mono">solid|dashed|dotted|double|none</h3>
        <div
          class="grid w-72 grid-cols-3 divide-x-4 divide-dashed divide-indigo-500 border-2 border-pink-500 p-2"
        >
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
        <div
          class="grid w-72 grid-cols-3 divide-x-4 divide-dotted divide-indigo-500 border-2 border-pink-500 p-2"
        >
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
        <div
          class="grid w-72 grid-cols-3 divide-x-4 divide-double divide-indigo-500 border-2 border-pink-500 p-2"
        >
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      </div>

      <!-- Outline Width -->
      <div>
        <h1>Outline Width</h1>
        <h2 class="font-mono">outline-{0|1|2|4|8}</h2>
      </div>

      <!-- Outline Color -->
      <div>
        <h1>Outline Color</h1>
        <h2 class="font-mono">inherit|current|transparent|black|white</h2>
        <h2 class="font-mono">50|100|200|300|400|500|600|700|800|900</h2>
        <h2 class="font-mono">slate|gray|zinc|neutral|stone|red|orange|</h2>
        <h2 class="font-mono">amber|yellow|lime|green|emerald|teal|cyan|</h2>
        <h2 class="font-mono">sky|blue|indigo|violet|purple|fuchsia|pink|rose</h2>

        <div class="grid grid-cols-3 gap-3 py-3">
          <button class="rounded p-2 outline outline-1 outline-offset-2 outline-indigo-500">Button A</button>
          <button class="rounded p-2 outline outline-2 outline-offset-2 outline-indigo-500">Button B</button>
          <button class="rounded p-2 outline outline-4 outline-offset-2 outline-indigo-500">Button C</button>
        </div>
      </div>

      <!-- Outline Style -->
      <div>
        <h1>Outline Style</h1>
        <h2 class="font-mono">outline-dashed|dotted|double|none</h2>
        <div class="grid grid-cols-3 gap-3 py-3">
          <button class="rounded p-2 outline-dashed outline-2 outline-offset-2 outline-indigo-500">
            Send
          </button>
          <button class="rounded p-2 outline-dotted outline-2 outline-offset-2 outline-indigo-500">
            Send
          </button>
          <button class="rounded p-2 outline-double outline-2 outline-offset-2 outline-indigo-500">
            Send
          </button>
          <button class="rounded p-2 outline-none outline-2 outline-offset-2 outline-indigo-500">Send</button>
          <button class="rounded p-2 outline outline-2 outline-offset-2 outline-indigo-500">Send</button>
        </div>
      </div>

      <!-- Outline Offset -->
      <div>
        <h1>Outline Offset</h1>
        <h2 class="font-mono">outline-offset-{0|1|2|4|8}</h2>
        <div class="grid grid-cols-3 gap-6 py-3">
          <button class="rounded outline outline-2 outline-offset-0 outline-indigo-500">Send</button>
          <button class="rounded outline outline-2 outline-offset-1 outline-indigo-500">Send</button>
          <button class="rounded outline outline-2 outline-offset-2 outline-indigo-500">Send</button>
          <button class="rounded outline outline-2 outline-offset-4 outline-indigo-500">Send</button>
          <button class="rounded outline outline-2 outline-offset-8 outline-indigo-500">Send</button>
        </div>
      </div>
    </div>
  </main>
</template>
