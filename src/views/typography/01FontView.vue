<template>
  <main>
    <div class="grid-col-1 grid w-96 gap-6 py-6">
      <div>
        <h1>Font Family</h1>
        <h2 class="font-mono">font-{sans|serif|mono}</h2>
        <p class="font-sans hover:font-mono">Patrick is an obese pink starfish</p>
        <p class="font-serif hover:font-mono">Patrick is an obese pink starfish</p>
        <p class="font-mono">Patrick is an obese pink starfish</p>
      </div>

      <div>
        <h1>Font Size</h1>
        <h2 class="font-mono">text-{size}</h2>
        <h3 class="font-mono">xs|sm|base|lg|xl|</h3>
        <h3 class="font-mono">2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl</h3>
        <p class="text-xs hover:text-3xl">xs: Patrick is an obese pink starfish</p>
        <p class="text-sm hover:text-3xl">sm: Patrick is an obese pink starfish</p>
        <p class="text-base hover:text-3xl">base: Patrick is an obese pink starfish</p>
        <p class="text-lg hover:text-3xl">lg: Patrick is an obese pink starfish</p>
        <p class="text-xl hover:text-3xl">xl: Patrick is an obese pink starfish</p>
        <p class="text-2xl hover:text-3xl">2xl: Patrick is an obese pink starfish</p>
        <p class="text-[14px] hover:text-3xl">14px: Patrick is an obese pink starfish</p>
      </div>

      <!-- Font Smoothing -->
      <div>
        <h1>Font Smoothing</h1>
        <h2 class="font-mono">antialiased|subh3ixel-antialiased</h2>
        <p class="subpixel-antialiased hover:antialiased">Patrick is an obese pink starfish</p>
        <p class="antialiased hover:subpixel-antialiased">Patrick is an obese pink starfish</p>
      </div>

      <!-- Font Style -->
      <div>
        <h1>Font Style</h1>
        <h2 class="font-mono">italic|not-italic</h2>
        <p class="italic hover:not-italic">Patrick is an obese pink starfish</p>
        <p class="not-italic hover:italic">Patrick is an obese pink starfish</p>
      </div>

      <!-- Font Weight -->
      <div>
        <h1>Font Weight</h1>
        <h2 class="font-mono">font-{weight}</h2>
        <h3 class="font-mono">thin|extralight|light|normal|</h3>
        <h3 class="font-mono">medium|semibold|bold|extrabold|black</h3>
        <p class="font-thin hover:font-black">Patrick is an obese pink starfish</p>
        <p class="font-extralight hover:font-black">Patrick is an obese pink starfish</p>
        <p class="font-light hover:font-black">Patrick is an obese pink starfish</p>
        <p class="font-normal hover:font-black">Patrick is an obese pink starfish</p>

        <p class="font-medium hover:font-black">Patrick is an obese pink starfish</p>
        <p class="font-semibold hover:font-black">Patrick is an obese pink starfish</p>
        <p class="font-bold hover:font-black">Patrick is an obese pink starfish</p>
        <p class="font-extrabold hover:font-black">Patrick is an obese pink starfish</p>
        <p class="font-black">Patrick is an obese pink starfish</p>
        <p class="font-[1100] hover:font-black">Patrick is an obese pink starfish</p>
      </div>
    </div>
  </main>
</template>
