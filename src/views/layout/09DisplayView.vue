<template>
  <main>
    <h1>Display</h1>
    <h3>set the display box type of an element</h3>
    <p class="font-mono">block|inline-block|inline|</p>
    <p class="font-mono">flex|inline-flex|</p>
    <p class="font-mono">table|inline-table|</p>
    <p class="font-mono">table-caption|table-cell|</p>
    <p class="font-mono">table-column|table-row|</p>
    <p class="font-mono">table-column-group|table-row-group|</p>
    <p class="font-mono">table-footer-group|table-header-group|</p>
    <p class="font-mono">flow-root|grid|inline-grid|</p>
    <p class="font-mono">contents|list-item|hidden</p>
    <p class="font-mono"></p>
    <br />

    <p class="font-mono">block|inline-block|inline</p>
    <p>control the flow of text and elements</p>
    <div class="h-100 w-100 border-2 border-cyan-500 bg-cyan-300 p-2">
      When controlling the flow of text, using the CSS property
      <span class="inline">display: inline</span>
      will cause the text inside the element to wrap normally.
      <br />
      <br />
      While using the property
      <span class="inline-block">display: inline-block</span> will wrap the element to prevent the text inside
      from extending beyond its parent.
      <br />
      <br />
      Lastly, using the property <span class="block">display: block</span>
      will put the element on its own line and fill its parent.
    </div>
    <br />

    <p class="font-mono">flow-root</p>
    <p>create a block-level element with its own block formatting context</p>

    <div class="h-100 w-100 border-2 border-cyan-500 bg-cyan-300">
      <div class="flow-root">
        <div class="my-4">
          Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York
          Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell
          of a lot.
        </div>
      </div>
      <div class="flow-root">
        <div class="my-4">
          Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene,
          flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink
          about old library books? Well, let me give you a hint, junior.
        </div>
      </div>
    </div>
    <br />

    <p class="font-mono">Flex</p>
    <p>create a block-level flex container</p>

    <div class="h-100 w-100 border-2 border-cyan-500 bg-cyan-300">
      <div class="flex items-center">
        <img src="path/to/image.jpg" />
        <div>
          <strong>Andrew Alfred</strong>
          <span>Technical advisor</span>
        </div>
      </div>
    </div>
    <br />

    <p class="font-mono">Inline Flex</p>
    <p>create an inline flex container that flows with text</p>
    <div class="h-100 w-100 border-2 border-cyan-500 bg-cyan-300">
      <p>
        Today I spent most of the day researching ways to take advantage of the fact that bottles can be
        returned for 10 cents in Michigan, but only 5 cents here.
        <span class="inline-flex items-baseline">
          <img src="path/to/image.jpg" alt="" class="mx-1 h-5 w-5 self-center rounded-full" />
          <span>Kramer</span>
        </span>
        keeps telling me there is no way to make it work, that he has run the numbers on every possible
        approach, but I just have to believe there's a way to make it work, there's simply too much
        opportunity here.
      </p>
    </div>
    <br />
  </main>
</template>

<script setup></script>
