<template>
  <main class="w-96">
    <div class="grid grid-cols-1 gap-6 py-6">
      <!-- Box Shadow -->
      <div>
        <h1>Box Shadow</h1>
        <h2 class="font-mono">shadow-{size}</h2>
        <h3 class="font-mono">sm|md|lg|xl|2xl|inner|none</h3>

        <div class="grid grid-cols-1 gap-3 py-3">
          <div class="grid grid-cols-3 gap-3 border-2 border-pink-500 p-2 py-3">
            <div class="border-2 border-indigo-200 p-2 shadow-sm">sm</div>
            <div class="border-2 border-indigo-200 p-2 shadow-md">md</div>
            <div class="border-2 border-indigo-200 p-2 shadow-lg">lg</div>
            <div class="border-2 border-indigo-200 p-2 shadow-xl">xl</div>
            <div class="border-2 border-indigo-200 p-2 shadow-2xl">2xl</div>
            <div class="border-2 border-indigo-200 p-2 shadow-inner">inner</div>
          </div>
        </div>
      </div>

      <!-- Box Shadow Color -->
      <div>
        <h1>Box Shadow Color</h1>
        <h2 class="font-mono">shadow-{color}</h2>
        <h3 class="font-mono">inherit|current|transparent|b|w</h3>
        <h3 class="font-mono">50|100|200|300|400|500|600|700|800|900</h3>
        <h3 class="font-mono">slate|gray|zinc|neutral|stone|red|orange|</h3>
        <h3 class="font-mono">amber|yellow|lime|green|emerald|teal|cyan|</h3>
        <h3 class="font-mono">sky|blue|indigo|violet|h3urple|fuchsia|pink|rose</h3>

        <div class="grid grid-cols-3 gap-3 border-2 border-pink-500 p-2 py-3">
          <button class="rounded bg-cyan-300 shadow-lg shadow-cyan-300/50">Send</button>
          <button class="rounded bg-blue-300 shadow-lg shadow-blue-300/50">Send</button>
          <button class="rounded bg-indigo-300 shadow-lg shadow-indigo-300/50">Send</button>
        </div>
      </div>

      <!-- Opacity -->
      <div>
        <h1>Opacity</h1>
        <h2 class="font-mono">opacity-{amount}</h2>
        <h3 class="font-mono">0|5|10|20|25|30|40|50|60|70|75|80|90|95|100</h3>

        <div class="grid grid-cols-4 gap-3 border-2 border-pink-500 p-2 py-3">
          <button class="bg-indigo-500 opacity-100">Send</button>
          <button class="bg-indigo-500 opacity-75">Send</button>
          <button class="bg-indigo-500 opacity-50">Send</button>
          <button class="bg-indigo-500 opacity-25">Send</button>
        </div>
      </div>

      <!-- Mix Blend Mode -->
      <div>
        <h1>Mix Blend Mode</h1>
        <h2 class="font-mono">mix-blend-{mode}</h2>
        <h3 class="font-mono">normal|multiply|screen|overlay|darken|lighten|</h3>
        <h3 class="font-mono">color-dodge|color-burn|hard-light|soft-light|</h3>
        <h3 class="font-mono">difference|exclusion|hue|saturation|</h3>
        <h3 class="font-mono">color|luminosity|plus-lighter</h3>

        <div class="grid grid-cols-3 gap-3 border-2 border-pink-500 p-2 py-3">
          <!-- multiply -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-multiply"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-multiply"></div>
          </div>

          <!-- screen -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-screen"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-screen"></div>
          </div>

          <!-- overlay -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-overlay"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-overlay"></div>
          </div>

          <!-- darken -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-darken"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-darken"></div>
          </div>

          <!-- lighten -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-lighten"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-lighten"></div>
          </div>

          <!-- color-dodge -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-color-dodge"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-color-dodge"></div>
          </div>

          <!-- color-burn -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-color-burn"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-color-burn"></div>
          </div>

          <!-- hard-light -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-hard-light"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-hard-light"></div>
          </div>

          <!-- soft-light -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-soft-light"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-soft-light"></div>
          </div>

          <!-- difference -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-difference"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-difference"></div>
          </div>

          <!-- exclusion -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-exclusion"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-exclusion"></div>
          </div>

          <!-- hue -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-hue"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-hue"></div>
          </div>

          <!-- saturation -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-saturation"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-saturation"></div>
          </div>

          <!-- color -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-color"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-color"></div>
          </div>

          <!-- luminosity -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-luminosity"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-luminosity"></div>
          </div>

          <!-- plus-lighter -->
          <div class="flex justify-center -space-x-6 p-2">
            <div class="h-16 w-16 rounded-full bg-blue-400 mix-blend-plus-lighter"></div>
            <div class="h-16 w-16 rounded-full bg-pink-400 mix-blend-plus-lighter"></div>
          </div>
        </div>
      </div>

      <!-- Background Blend Mode -->
      <div>
        <h1>Background Blend Mode</h1>
        <h2 class="font-mono">bg-blend-{mode}</h2>
        <h3 class="font-mono">normal|multiply|screen|overlay|darken|lighten|</h3>
        <h3 class="font-mono">color-dodge|color-burn|hard-light|soft-light|</h3>
        <h3 class="font-mono">difference|exclusion|hue|saturation|</h3>
        <h3 class="font-mono">color|luminosity</h3>

        <div class="grid grid-cols-3 gap-3 border-2 border-pink-500 p-2 py-3">
          <!-- multiply -->
          <!-- screen -->
          <!-- overlay -->
          <!-- darken -->
          <!-- lighten -->
          <!-- color-dodge -->
          <!-- color-burn -->
          <!-- hard-light -->
          <!-- soft-light -->
          <!-- difference -->
          <!-- exclusion -->
          <!-- hue -->
          <!-- saturation -->
          <!-- color -->
          <!-- luminosity -->
        </div>
      </div>
    </div>
  </main>
</template>
