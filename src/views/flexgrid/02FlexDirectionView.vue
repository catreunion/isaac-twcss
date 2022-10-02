<template>
  <main>
    <h1>Flex Direction</h1>
    <h3>control the direction of flex items</h3>
    <p>​`flex-row` : position flex items horizontally in the same direction as text</p>
    <p>`flex-row-reverse` : position flex items horizontally in the opposite direction</p>
    <p>`flex-col` : position flex items vertically</p>
    <p>`flex-col-reverse` : position flex items vertically in the opposite direction</p>
    <div class="flex flex-row">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    <div class="flex flex-row-reverse">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    <div class="flex flex-col">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    <div class="flex flex-col-reverse">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  </main>
</template>

<script setup></script>
