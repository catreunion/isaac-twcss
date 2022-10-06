<template>
  <main>
    <h1>Visibility</h1>
    Visibility set the visibility of an element visible|invisible invisible hide an element, but still
    maintain its place in the DOM, affecting the layout of other elements (compare with .hidden from the
    display documentation).

    <div class="grid grid-cols-3 gap-4">
      <div>01</div>
      <div class="... invisible">02</div>
      <div>03</div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div>01</div>
      <div class="... visible">02</div>
      <div>03</div>
    </div>
  </main>
</template>

<script setup></script>
