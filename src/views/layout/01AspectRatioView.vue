<template>
  <main>
    <div class="grid-col-1 grid w-80 gap-6 py-6">
      <!-- Aspect Ratio -->
      <div>
        <h1>Aspect Ratio</h1>
        <h2 class="font-mono">aspect-{ratio}</h2>
        <h3 class="font-mono">auto|square|video</h3>
        <div class="grid-col-1 grid w-80 gap-3 py-3">
          <iframe
            class="aspect-auto w-full"
            src="https://www.youtube.com/embed/eMvUGOrQfSw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="aspect-square w-full"
            src="https://www.youtube.com/embed/eMvUGOrQfSw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/eMvUGOrQfSw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="aspect-[4/3] w-full"
            src="https://www.youtube.com/embed/eMvUGOrQfSw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Container -->
      <div>
        <h1>Container</h1>
        <h2>set the max-width of an element to match the min-width of the current breakpoint</h2>
        <h2>
          Tailwind’s container does not center itself automatically and does not have any built-in horizontal
          padding
        </h2>
        <div class="grid-col-1 grid w-80 gap-3 py-3">
          <div>
            <h3>center a container</h3>
            <div class="container mx-auto"></div>
          </div>

          <div>
            <h3>add horizontal padding</h3>
            <div class="container mx-auto px-4"></div>
          </div>

          <div class="md:container md:mx-auto"></div>
        </div>
      </div>

      <!-- Columns -->
      <div>
        <div class="grid-col-1 grid w-80 gap-3 py-3">
          <div>
            <h1>columns-{count}</h1>
            <h2>1|2|3|4|5|6|7|8|9|10|11|12|auto</h2>
            <h3>set the number of columns that should be created for the content within an element</h3>
            <h3>the column width will be automatically adjusted to accommodate that number</h3>
            <div class="columns-3">
              <img class="aspect-video w-full" src="" />
              <img class="aspect-square w-full" src="" />
              <img class="aspect-auto w-full" src="" />
            </div>
          </div>

          <div>
            <h1>columns-{width}</h1>
            <h2>3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl</h2>
            <h3>
              set the ideal column width for the content within an element, with the number of columns (the
              count) automatically adjusting to accommodate that value
            </h3>
            <div class="columns-3xs">
              <img class="aspect-video w-full" src="" />
              <img class="aspect-square w-full" src="" />
              <img class="aspect-auto w-full" src="" />
            </div>
          </div>

          <div>
            <div class="columns-3 gap-8">
              <img class="aspect-video w-full" src="" />
              <img class="aspect-square w-full" src="" />
              <img class="aspect-auto w-full" src="" />
            </div>
          </div>

          <div>
            <div class="columns-[10rem]"></div>
          </div>
        </div>
      </div>

      <!-- Break After -->
      <div>
        <h1>Break After</h1>
        <h2>control how a column or page break should behave after an element</h2>
        <h3>break-after-{value}</h3>
        <h4>auto|avoid|all|avoid-page|page|left|right|column</h4>
      </div>

      <!-- Break Before -->
      <div>
        <h1>Break Before</h1>
        <h2>control how a column or page break should behave before an element</h2>
        <h3>break-before-{value}</h3>
        <h4>auto|avoid|all|avoid-page|page|left|right|column</h4>
      </div>

      <!-- Break Inside -->
      <div>
        <h1>Break Inside</h1>
        <h2>control how a column or page break should behave inside an element</h2>
        <h3>break-inside-{value}</h3>
        <h4>auto|avoid|avoid-page|avoid-column</h4>
      </div>
    </div>
  </main>
</template>

<script setup></script>
