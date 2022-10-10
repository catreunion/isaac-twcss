<template>
  <main>
    <h1>Space Between</h1>
    <h2>set the space between child elements</h2>

    <h3>space-x|y-{amount}</h3>
    <h3>amount : 0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|</h3>
    <h3>amount : 11|12|14|16|20|24|28|32|36|40|44|48|</h3>
    <h3>amount : 52|56|60|64|72|80|96|px</h3>
    <p>set horizontal/vertical space between children elements</p>

    <div class="flex space-x-4">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>

    <div class="flex flex-col space-y-4">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>

    <p>space-x|y-reverse</p>

    <div class="flex flex-row-reverse space-x-4 space-x-reverse">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  </main>
</template>

<script setup></script>
