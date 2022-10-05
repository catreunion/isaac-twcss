<template>
  <main>
    <h1>Box Sizing</h1>
    <h3>control how the browser should calculate an element's total size</h3>
    <p class="font-mono">box-border|box-content</p>
    <br />

    <p class="font-mono">box-border</p>
    <p>include the element’s borders and padding when you give it a height or width</p>
    <p>a 100px × 100px element with 2px border and 4px of padding on all sides</p>
    <p>internal content area is 88px × 88px</p>
    <div class="box-border h-32 w-32 border-4 border-cyan-300 bg-cyan-500 p-4">Box 1</div>
    <br />

    <p class="font-mono">box-content</p>
    <p>add borders and padding on top of the element’s specified width or height</p>
    <p>a 100px × 100px element with 2px border and 4px of padding on all sides</p>
    <p>rendered as 112px × 112px, internal content area is 100px × 100px</p>
    <div class="box-content h-32 w-32 border-4 border-cyan-300 bg-cyan-500 p-4">Box 2</div>
    <br />
  </main>
</template>

<script setup></script>
