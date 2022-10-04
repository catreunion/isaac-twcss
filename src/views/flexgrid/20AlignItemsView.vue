<template>
  <main>
    <h1>Align Items</h1>
    <h3>control how flex and grid items are positioned along a container's cross axis</h3>
    <p class="font-mono">items-start|items-end|items-center|</p>
    <p class="font-mono">items-baseline|items-stretch</p>
    <br />

    <p class="font-mono">items-start</p>
    <p>align items to the start of the container’s cross axis</p>
    <div class="flex items-start">
      <div class="h-14 w-14 border-8 border-indigo-300">Box 1</div>
      <div class="h-20 w-14 border-8 border-indigo-500">Box 2</div>
      <div class="h-24 w-14 border-8 border-indigo-700">Box 3</div>
    </div>
    <br />

    <p class="font-mono">items-end</p>
    <p>align items to the end of the container’s cross axis</p>
    <div class="flex items-end">
      <div class="h-14 w-14 border-8 border-indigo-300">Box 1</div>
      <div class="h-20 w-14 border-8 border-indigo-500">Box 2</div>
      <div class="h-24 w-14 border-8 border-indigo-700">Box 3</div>
    </div>
    <br />

    <p class="font-mono">items-center</p>
    <p>align items along the center of the container’s cross axis</p>
    <div class="flex items-center">
      <div class="h-14 w-14 border-8 border-indigo-300">Box 1</div>
      <div class="h-20 w-14 border-8 border-indigo-500">Box 2</div>
      <div class="h-24 w-14 border-8 border-indigo-700">Box 3</div>
    </div>
    <br />

    <p class="font-mono">items-baseline</p>
    <p>align items along the container’s cross axis such that all of their baselines align</p>
    <div class="flex items-baseline">
      <div class="border-8 border-indigo-300 pt-2 pb-6">Box 1</div>
      <div class="border-8 border-indigo-500 pt-8 pb-12">Box 2</div>
      <div class="border-8 border-indigo-700 pt-12 pb-4">Box 3</div>
    </div>
    <br />

    <p class="font-mono">items-stretch</p>
    <p>stretch items to fill the container’s cross axis</p>
    <div class="flex items-stretch">
      <div class="border-8 border-indigo-300 py-4">Box 1</div>
      <div class="border-8 border-indigo-500 py-12">Box 2</div>
      <div class="border-8 border-indigo-700 py-8">Box 3</div>
    </div>
    <br />
  </main>
</template>
