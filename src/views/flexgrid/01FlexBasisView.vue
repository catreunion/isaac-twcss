<template>
  <main>
    <h1>Flex Basis</h1>
    <h2>set the initial size of flex items</h2>
    <h3 class="font-mono">basis-{n}</h3>
    <h3 class="font-mono">n : 0 to 12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|</h3>
    <h3 class="font-mono">basis-auto|basis-px|basis-full</h3>
    <h3 class="font-mono">basis-0.5|1.5|2.5|3.5|</h3>
    <h3 class="font-mono">basis-1/2|1/3|2/3|</h3>
    <h3 class="font-mono">basis-1/4|2/4|3/4|</h3>
    <h3 class="font-mono">basis-1/5|2/5|3/5|4/5|</h3>
    <h3 class="font-mono">basis-1/6|2/6|3/6|4/6|5/6|</h3>
    <h3 class="font-mono">basis-1/12|2/12|3/12|4/12|5/12|6/12|</h3>
    <h3 class="font-mono">basis-7/12|8/12|9/12|10/12|11/12</h3>

    <div class="grid-col-1 grid gap-8 py-8">
      <div class="flex flex-row border-2 border-pink-500">
        <div class="basis-1/4 border-2 border-indigo-500 p-2">File</div>
        <div class="basis-1/4 border-2 border-indigo-500 p-2">Edit</div>
        <div class="basis-1/2 border-2 border-indigo-500 p-2">View</div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
