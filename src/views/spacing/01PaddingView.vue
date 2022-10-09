<template>
  <main>
    <h1>Padding</h1>
    <h2>set an element's padding</h2>
    <h3 class="font-mono">p{t|r|b|l}-{size}</h3>
    <h3 class="font-mono">size : p-px|px-px|py-px|pt-px|pr-px|pb-px|pl-px</h3>
    <h3 class="font-mono">size : 0|0.5|1|1.5|2|2.5|3|3.5|</h3>
    <h3 class="font-mono">size : 4|5|6|7|8|9|10|11|12|</h3>
    <h3 class="font-mono">size : 14|16|20|24|28|32|36|40|44|48</h3>
    <h3 class="font-mono">size : 52|56|60|64|72|80|96</h3>

    <div class="grid-col-1 grid gap-8 py-8">
      <div>
        <h3 class="font-mono">p{t|r|b|l}-{size}</h3>
        <p class="font-mono">add padding to one side of an element</p>
        <div class="flex justify-center">
          <div class="border-2 border-indigo-500 pt-6">File</div>
          <div class="border-2 border-indigo-500 pr-4">Edit</div>
          <div class="border-2 border-indigo-500 pb-8">View</div>
          <div class="border-2 border-indigo-500 pl-6">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">px-{size}</h3>
        <p class="font-mono">add horizontal padding to an element</p>
        <div class="flex justify-center">
          <div class="border-2 border-indigo-500 px-8">File</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">py-{size}</h3>
        <p class="font-mono">add vertical padding to an element</p>
        <div class="flex justify-center">
          <div class="border-2 border-indigo-500 py-8">File</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">p-{size}</h3>
        <p class="font-mono">add padding to all sides of an element</p>
        <div class="flex justify-center">
          <div class="border-2 border-indigo-500 p-8">File</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">arbitrary values</h3>
        <div class="flex justify-center">
          <div class="border-2 border-indigo-500 p-[15px]">File</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
