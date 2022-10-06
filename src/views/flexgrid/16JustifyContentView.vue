<template>
  <main>
    <h1>Justify Content</h1>
    <h2>control how flex and grid items are positioned along a container's x axis</h2>
    <h3 class="font-mono">justify-start|justify-center|justify-end|</h3>
    <h3 class="font-mono">justify-between|justify-around|justify-evenly</h3>
    <br />

    <div class="grid-col-1 grid gap-8">
      <div>
        <h3 class="font-mono">justify-start</h3>
        <p>justify items against the start of the container’s x axis</p>
        <div class="flex justify-start">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-center</h3>
        <p>justify items along the center of the container’s x axis</p>
        <div class="flex justify-center">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-end</h3>
        <p>justify items against the end of the container’s x axis</p>
        <div class="flex justify-end">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-between</h3>
        <p>justify items along the container’s x axis +</p>
        <p>equal amount of space between each item</p>
        <div class="flex justify-between">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-around</h3>
        <p>justify items along the container’s x axis +</p>
        <p>equal amount of space on each side of each item</p>
        <div class="flex justify-around">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-evenly</h3>
        <p>justify items along the container’s x axis +</p>
        <p>equal amount of space around each item</p>
        <div class="flex justify-evenly">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
