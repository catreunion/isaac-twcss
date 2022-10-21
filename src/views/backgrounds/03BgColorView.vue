<template>
  <main class="w-96">
    <div class="grid grid-cols-1 gap-6 py-6">
      <!-- Background Clip -->
      <div>
        <h1>Background Clip</h1>
        <h2>set the bounding box of an element's background</h2>
        <h3>bg-clip-{keyword}</h3>
        <h4>border|padding|content|text</h4>
        <div class="grid grid-cols-3 gap-3 border-2 border-pink-500 p-2 py-3">
          <div class="border-4 border-dashed border-violet-300 bg-violet-600 bg-clip-border p-6"></div>
          <div class="border-4 border-dashed border-violet-300 bg-violet-600 bg-clip-padding p-6"></div>
          <div class="border-4 border-dashed border-violet-300 bg-violet-600 bg-clip-content p-6"></div>
        </div>

        <div class="text-5xl font-extrabold">
          <span class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            make the background visible through the text
          </span>
        </div>
      </div>

      <!-- Background Color -->
      <div>
        <h1>Background Color</h1>
        <h2 class="font-mono">bg-{color}</h2>
        <h2 class="font-mono">inherit|current|transparent|black|white</h2>
        <h2 class="font-mono">50|100|200|300|400|500|600|700|800|900</h2>
        <h3 class="font-mono">slate|gray|zinc|neutral|stone|red|</h3>
        <h3 class="font-mono">orange|amber|yellow|lime|green|emerald|</h3>
        <h3 class="font-mono">teal|cyan|sky|blue|indigo|violet|purple|</h3>
        <h3 class="font-mono">fuchsia|pink|rose</h3>
        <div class="grid grid-cols-4 gap-3 border-2 border-pink-500 p-2 py-3">
          <button class="bg-indigo-500/100 p-2 hover:bg-orange-500">Send</button>
          <button class="bg-indigo-500/75 p-2">Send</button>
          <button class="bg-indigo-500/50 p-2">Send</button>
          <button class="bg-indigo-500/25 p-2">Send</button>
          <button class="bg-indigo-500/0 p-2">Send</button>
          <button class="bg-[#50d71e] p-2">Send</button>
        </div>
      </div>

      <!-- Background Image -->
      <div>
        <h1>Linear Gradient Background</h1>
        <h1 class="font-mono">bg-gradient-{direction}</h1>
        <h2 class="font-mono">bg-none|to-t|to-r|to-b|to-l|</h2>
        <h2 class="font-mono">to-tl|to-tr|to-br|to-bl|</h2>
        <div class="grid grid-cols-1 gap-3 border-2 border-pink-500 p-2 py-3">
          <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
          <div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
          <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
      </div>

      <!-- Gradient Color Stops -->
      <div>
        <h1>Gradient Color Stops</h1>
        <h2 class="font-mono">from-{inherit|current|transparent|b|w}</h2>
        <h2 class="font-mono">from-{color}-{50|...}</h2>
        <h3>set the starting color of a gradient</h3>
        <h2 class="font-mono">to-{inherit|current|transparent|b|w}</h2>
        <h2 class="font-mono">to-{color}-{50|...}</h2>
        <h3>set the ending color of a gradient</h3>
        <h2 class="font-mono">via-{color}</h2>
        <h3>add a middle color to a gradient</h3>
        <div class="grid grid-cols-1 gap-3 border-2 border-pink-500 p-2 py-3">
          <div class="h-14 bg-gradient-to-r from-indigo-500"></div>
          <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div class="h-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <button
            class="w-32 justify-self-center rounded bg-gradient-to-r from-green-400 to-blue-500 p-2 text-white hover:from-pink-500 hover:to-yellow-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
