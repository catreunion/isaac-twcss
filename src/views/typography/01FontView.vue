<template>
  <main>
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Font Family -->
      <div>
        <h1 class="font-mono">Font Family : font-sans|font-serif|font-mono</h1>
        <p class="font-sans hover:font-mono">The quick brown fox jumps over the lazy dog</p>
        <p class="font-serif hover:font-mono">The quick brown fox jumps over the lazy dog</p>
        <p class="font-mono">The quick brown fox jumps over the lazy dog</p>
      </div>

      <!-- Font Size -->
      <div>
        <h1 class="font-mono">Font Size : text-{size}</h1>
        <h2 class="font-mono">size : xs|sm|base|lg|xl|</h2>
        <h2 class="font-mono">size : 2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl</h2>
        <p class="text-xs hover:text-3xl">xs: The quick brown fox jumps over the lazy dog.</p>
        <p class="text-sm hover:text-3xl">sm: The quick brown fox jumps over the lazy dog.</p>
        <p class="text-base hover:text-3xl">base: The quick brown fox jumps over the lazy dog.</p>
        <p class="text-lg hover:text-3xl">lg: The quick brown fox jumps over the lazy dog.</p>
        <p class="text-xl hover:text-3xl">xl: The quick brown fox jumps over the lazy dog.</p>
        <p class="text-2xl hover:text-3xl">2xl: The quick brown fox jumps over the lazy dog.</p>
        <p class="text-[14px] hover:text-3xl">14px: The quick brown fox jumps over the lazy dog.</p>
      </div>

      <!-- Font Smoothing -->
      <div>
        <h1>Font Smoothing</h1>
        <h2 class="font-mono">​antialiased : render text using grayscale antialiasing</h2>
        <h2 class="font-mono">subh3ixel-antialiased : render text using subpixel antialiasing</h2>
        <p class="subpixel-antialiased hover:antialiased">The quick brown fox jumps over the lazy dog</p>
        <p class="antialiased hover:subpixel-antialiased">The quick brown fox jumps over the lazy dog</p>
      </div>

      <!-- Font Style -->
      <div>
        <h1 class="font-mono">Font Style : italic|not-italic</h1>
        <p class="italic hover:not-italic">The quick brown fox jumps over the lazy dog</p>
        <p class="not-italic hover:italic">The quick brown fox jumps over the lazy dog</p>
      </div>

      <!-- Font Weight -->
      <div>
        <h1 class="font-mono">Font Weight : font-{weight}</h1>
        <h2 class="font-mono">weight : thin|extralight|light|normal|</h2>
        <h2 class="font-mono">weight : medium|semibold|bold|extrabold|black</h2>
        <p class="font-thin hover:font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-extralight hover:font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-light hover:font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-normal hover:font-black">The quick brown fox jumps over the lazy dog</p>

        <p class="font-medium hover:font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-semibold hover:font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-bold hover:font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-extrabold hover:font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-black">The quick brown fox jumps over the lazy dog</p>
        <p class="font-[1100] hover:font-black">The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  </main>
</template>
