<template>
  <main>
    <h1>Margin</h1>
    <h2>set an element's margin</h2>
    <h3 class="font-mono">size : m-px|mx-px|my-px|mt-px|mr-px|mb-px|ml-px|</h3>
    <h3 class="font-mono">size : 0|0.5|1|1.5|2|2.5|3|3.5|</h3>
    <h3 class="font-mono">size : 4|5|6|7|8|9|10|11|12|</h3>
    <h3 class="font-mono">size : 14|16|20|24|28|32|36|40|44|48</h3>
    <h3 class="font-mono">size : 52|56|60|64|72|80|96</h3>
    <h3 class="font-mono">m-auto|mx-auto|my-auto|</h3>
    <h3 class="font-mono">mt-auto|mr-auto|mb-auto|ml-auto</h3>

    <div class="grid-col-1 grid gap-8 py-8">
      <div>
        <h3 class="font-mono">m{t|r|b|l}-{size}</h3>
        <p class="font-mono">add margin to one side of an element</p>
        <div class="flex justify-center border-2 border-rose-500">
          <div class="mt-6 border-2 border-indigo-500">File</div>
          <div class="mr-4 border-2 border-indigo-500">Edit</div>
          <div class="mb-8 border-2 border-indigo-500">View</div>
          <div class="ml-6 border-2 border-indigo-500">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">m{x|y}-{size}</h3>
        <p class="font-mono">add horizontal|vertical margin to an element</p>
        <div class="flex justify-center border-2 border-rose-500">
          <div class="mx-8 border-2 border-indigo-500">File</div>
          <div class="my-8 border-2 border-indigo-500">Edit</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">m-{size}</h3>
        <p class="font-mono">add margin to all sides of an element</p>
        <div class="flex justify-center border-2 border-rose-500">
          <div class="m-8 border-2 border-indigo-500">File</div>
        </div>
      </div>

      <div>
        <h3>negative values</h3>
        <div class="h-16 w-36 bg-sky-400 opacity-20"></div>
        <div class="-mt-8 h-16 w-16 bg-sky-300">File</div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
