<template>
  <main>
    <h1>Flex</h1>
    <h3>control how flex items both grow and shrink</h3>
    <p>`flex-1` : allow a flex item to grow and shrink as needed, ignoring its initial size</p>
    <p>`flex-auto` : allow a flex item to grow and shrink, taking into account its initial size</p>
    <p>`flex-initial` : allow a flex item to shrink but not grow, taking into account its initial size</p>
    <p>`flex-none` : prevent a flex item from growing or shrinking</p>
    <div class="flex">
      <div class="flex-none">01</div>
      <div class="w-64 flex-1">02</div>
      <div class="w-32 flex-1">03</div>
    </div>
    <div class="flex">
      <div class="flex-none">01</div>
      <div class="w-64 flex-auto">02</div>
      <div class="w-32 flex-auto">03</div>
    </div>
    <div class="flex">
      <div class="h-14 w-14 flex-none">01</div>
      <div class="w-64 flex-initial">02</div>
      <div class="w-32 flex-initial">03</div>
    </div>
    <div class="flex">
      <div class="h-14 w-14 flex-none">01</div>
      <div class="flex-none">02</div>
      <div class="flex-1">03</div>
    </div>
  </main>
</template>

<script setup></script>
