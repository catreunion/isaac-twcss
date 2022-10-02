<template>
  <main>
    <h1>Flex Basis</h1>
    <h3>control the initial size of flex items</h3>
    <p>​`basis-0` to 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96</p>
    <p>`basis-auto`, `basis-px`, `basis-full`</p>
    <p>`basis-0.5`, 1.5, 2.5, 3.5</p>
    <p>`basis-1/2`</p>
    <p>`basis-1/3`, `basis-2/3`</p>
    <p>`basis-1/4`, `basis-2/4`, `basis-3/4`</p>
    <p>`basis-1/5`, to `basis-4/5`</p>
    <p>`basis-1/6` to `basis-5/6`</p>
    <p>`basis-1/12` to `basis-11/12`</p>
    <div class="flex flex-row">
      <div class="basis-1/4 lg:basis-1/3">01</div>
      <div class="basis-1/4 lg:basis-1/3">02</div>
      <div class="basis-1/2 lg:basis-1/3">03</div>
    </div>
  </main>
</template>

<script setup></script>
