<template>
  <main class="w-96">
    <div class="grid grid-cols-1 gap-6 py-6">
      <!-- Container -->
      <div>
        <h1 class="font-mono">container</h1>
        <h2>set the max-width of an element to match the min-width of the current breakpoint</h2>
        <h3 class="font-mono">sm 640px|md 768px|lg 1024px|</h3>
        <h3 class="font-mono">xl 1280px|2xl 1536px</h3>
        <div class="grid grid-cols-1 gap-3 py-3">
          <div class="container mx-auto h-16 border-2 border-pink-500 p-2"></div>
          <div class="border-2 border-pink-500 p-2 md:container md:mx-auto">
            Full-width fluid until the `md` breakpoint, then lock to container
          </div>
        </div>
      </div>

      <!-- Break After -->
      <div>
        <h1>Break After</h1>
        <h3>control how a column/page break should behave after an element</h3>
        <h2 class="font-mono">break-after-{value}</h2>
        <h4 class="font-mono">auto|avoid|all|avoid-page|</h4>
        <h4 class="font-mono">page|left|right|column</h4>
      </div>

      <!-- Break Before -->
      <div>
        <h1>Break Before</h1>
        <h3>control how a column/page break should behave before an element</h3>
        <h2 class="font-mono">break-before-{value}</h2>
        <h4 class="font-mono">auto|avoid|all|avoid-page|</h4>
        <h4 class="font-mono">page|left|right|column</h4>
      </div>

      <!-- Break Inside -->
      <div>
        <h1>Break Inside</h1>
        <h3>control how a column/page break should behave within an element</h3>
        <h2 class="font-mono">break-inside-{value}</h2>
        <h4 class="font-mono">auto|avoid|avoid-page|avoid-column</h4>
      </div>

      <!-- Box Decoration Break -->
      <div>
        <h1>Box Decoration Break</h1>
        <h2>
          control whether properties like background, border, border-image, box-shadow, clip-page, margin, and
          padding should be rendered as if the element were one continuous fragment, or distinct blocks
        </h2>
        <h3 class="font-mono">box-decoration-clone|box-decoration-slice</h3>
        <div class="grid grid-cols-2 gap-3 py-3">
          <div>
            <span class="bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white">
              Hello<br />
              World
            </span>
          </div>

          <div>
            <span class="bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-clone px-2 text-white">
              Hello<br />
              World
            </span>
          </div>
        </div>
      </div>

      <!-- Box Sizing -->
      <div>
        <h1>Box Sizing</h1>
        <h2>control how the browser should calculate an element's total size</h2>
        <h3 class="font-mono">box-border|box-content</h3>

        <div class="grid grid-cols-1 gap-3 py-3">
          <div>
            <h4 class="font-mono">box-border</h4>
            <p>include the element’s borders/padding when you give it height/width</p>
            <p>
              a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as
              100px × 100px, with an internal content area of 88px × 88px
            </p>
            <div class="box-border h-32 w-32 border-2 border-pink-500 bg-indigo-200 p-2">100px × 100px</div>
          </div>

          <div>
            <h4 class="font-mono">box-content</h4>
            <p>add borders/padding on top of the element’s specified width/height</p>
            <p>
              a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as
              112px × 112px, with an internal content area of 100px × 100px
            </p>
            <div class="box-content h-32 w-32 border-2 border-pink-500 bg-indigo-200 p-2">112px × 112px</div>
          </div>
        </div>
      </div>

      <!-- Display -->
      <div>
        <h1>Display</h1>
        <h2>set the display box type of an element</h2>
        <h3 class="font-mono">inline|inline-block|block|</h3>
        <h3 class="font-mono">flex|inline-flex|table|inline-table</h3>

        <h3 class="font-mono">table-caption|table-cell|</h3>
        <h3 class="font-mono">table-header-group|table-footer-group|</h3>
        <h3 class="font-mono">table-column|table-column-group|</h3>
        <h3 class="font-mono">table-row|table-row-group|</h3>

        <h3 class="font-mono">flow-root|grid|inline-grid|</h3>
        <h3 class="font-mono">contents|list-item|hidden</h3>
      </div>

      <!-- Floats -->
      <div>
        <h1>Floats</h1>
        <h2>set the wrapping of content around an element</h2>
        <h3 class="font-mono">float-right|left|none</h3>
      </div>

      <!-- Clear -->
      <div>
        <h1>Clear</h1>
        <h2>set the wrapping of content around an element</h2>
        <h3 class="font-mono">clear-left|right|both|none</h3>
      </div>

      <!-- Isolation -->
      <div>
        <h1>Isolation</h1>
        <h2>control whether an element should explicitly create a new stacking context</h2>
        <h3 class="font-mono">isolate|isolation-auto</h3>
      </div>

      <!-- Object Fit -->
      <div>
        <h1>Object Fit</h1>
        <h2>control how a replaced element's content should be resized</h2>
        <h3 class="font-mono">object-{contain|cover|fill|none|scale-down}</h3>

        <div class="grid grid-cols-1 gap-3 border-2 border-pink-500 p-2 py-3">
          <div class="border-2 border-indigo-500 p-2">
            <h4 class="font-mono">object-contain</h4>
            <p>resize an element’s content to stay contained within its container</p>
            <img class="h-48 w-96 object-contain" src="/SLAM_DUNK.jpeg" alt="SLAM DUNK" />
          </div>

          <div class="border-2 border-indigo-500 p-2">
            <h4 class="font-mono">object-cover</h4>
            <p>resize an element’s content to cover its container</p>
            <img class="h-48 w-96 object-cover" src="/SLAM_DUNK.jpeg" alt="SLAM DUNK" />
          </div>

          <div class="border-2 border-indigo-500 p-2">
            <h4 class="font-mono">object-fill</h4>
            <p>stretch an element’s content to fit its container</p>
            <img class="h-48 w-96 object-fill" src="/SLAM_DUNK.jpeg" alt="SLAM DUNK" />
          </div>

          <div class="border-2 border-indigo-500 p-2">
            <h4 class="font-mono">object-none</h4>
            <p>display an element’s content at its original size ignoring the container size</p>
            <img class="h-48 w-96 object-none" src="/SLAM_DUNK.jpeg" alt="SLAM DUNK" />
          </div>

          <div class="border-2 border-indigo-500 p-2">
            <h4 class="font-mono">object-scale-down</h4>
            <p>
              display an element’s content at its original size but scale it down to fit its container if
              necessary
            </p>
            <img class="h-48 w-96 object-scale-down" src="/SLAM_DUNK.jpeg" alt="SLAM DUNK" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
