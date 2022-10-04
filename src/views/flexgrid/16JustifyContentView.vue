<template>
  <main>
    <h1>Justify Content</h1>
    <h3>control how flex and grid items are positioned along a container's main axis</h3>
    <p class="font-mono">justify-start|justify-end|justify-center|</p>
    <p class="font-mono">justify-between|justify-around|justify-evenly</p>
    <br />

    <p class="font-mono">justify-start</p>
    <p>justify items against the start of the container’s main axis</p>
    <div class="flex justify-start">
      <div class="h-14 w-20 border-8 border-indigo-500">Box 1</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 2</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 4</div>
    </div>
    <br />

    <p class="font-mono">justify-end</p>
    <p>justify items against the end of the container’s main axis</p>
    <div class="flex justify-end">
      <div class="h-14 w-20 border-8 border-indigo-500">Box 1</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 2</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 4</div>
    </div>
    <br />

    <p class="font-mono">justify-center</p>
    <p>justify items along the center of the container’s main axis</p>
    <div class="flex justify-center">
      <div class="h-14 w-20 border-8 border-indigo-500">Box 1</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 2</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 4</div>
    </div>
    <br />

    <p class="font-mono">justify-between</p>
    <p>
      justify items along the container’s main axis such that there is an equal amount of space between each
      item
    </p>
    <div class="flex justify-between">
      <div class="h-14 w-20 border-8 border-indigo-500">Box 1</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 2</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 4</div>
    </div>
    <br />

    <p class="font-mono">justify-around</p>
    <p>
      justify items along the container’s main axis such that there is an equal amount of space on each side
      of each item
    </p>
    <div class="flex justify-around">
      <div class="h-14 w-20 border-8 border-indigo-500">Box 1</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 2</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 4</div>
    </div>
    <br />

    <p class="font-mono">justify-evenly</p>
    <p>
      justify items along the container’s main axis such that there is an equal amount of space around each
      item, but also accounting for the doubling of space you would normally see between each item when using
      justify-around
    </p>
    <div class="flex justify-evenly">
      <div class="h-14 w-20 border-8 border-indigo-500">Box 1</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 2</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-20 border-8 border-indigo-500">Box 4</div>
    </div>
    <br />
  </main>
</template>
