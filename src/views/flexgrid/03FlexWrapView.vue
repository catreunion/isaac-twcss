<template>
  <main>
    <h1>Flex Wrap</h1>
    <h3>control how flex items wrap</h3>
    <p>`flex-wrap` : allow flex items to wrap</p>
    <p>`flex-wrap-reverse` : wrap flex items in the reverse direction</p>
    <p>
      `flex-nowrap` : prevent flex items from wrapping, causing inflexible items to overflow the container if
      necessary
    </p>
    <div class="flex flex-wrap">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    <div class="flex flex-wrap-reverse">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    <div class="flex flex-nowrap">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  </main>
</template>

<script setup></script>
