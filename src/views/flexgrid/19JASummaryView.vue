<template>
  <main>
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Justify Content -->
      <div>
        <h1>Justify Content</h1>
        <h2>control how columns are positioned along the container's x axis</h2>
        <p class="font-mono">justify-start|justify-center|justify-end|</p>
        <p class="font-mono">justify-between|justify-around|justify-evenly</p>
        <div class="flex justify-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h3 class="font-mono">justify-evenly</h3>
        <p>distribute columns along the container’s x axis +</p>
        <p>equal amount of space around each item</p>
      </div>

      <!-- Align Content -->
      <div>
        <h1>Align Content</h1>
        <h2>control how rows are positioned along the container's y axis</h2>
        <p class="font-mono">content-start|content-center|content-end|</p>
        <p class="font-mono">content-between|content-around|content-evenly</p>
        <div class="grid-col-1 grid h-80 content-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h3 class="font-mono">content-evenly</h3>
        <p>distribute rows along the container’s y axis +</p>
        <p>equal amount of space around each row</p>
      </div>

      <!-- Justify Items -->
      <div>
        <h1>Justify Items</h1>
        <h2>control how grid items are aligned along their inline x axis</h2>
        <p class="font-mono">justify-items-start|justify-items-end|</p>
        <p class="font-mono">justify-items-center|justify-items-stretch</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h3 class="font-mono">justify-items-stretch</h3>
        <p>stretch grid items along their inline x axis</p>
      </div>

      <!-- Align Items -->
      <div>
        <h1>Align Items</h1>
        <h2>control how items are aligned along the container's y axis</h2>
        <p class="font-mono">items-start|items-center|items-end|</p>
        <p class="font-mono">items-baseline|items-stretch</p>
        <div class="flex items-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 px-2 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-10">Help</div>
        </div>
        <h3 class="font-mono">items-start</h3>
        <p>align items against the start of the container’s y axis</p>
      </div>

      <!-- Justify Self -->
      <div>
        <h1>Justify Self</h1>
        <h2>control how an individual grid item is aligned along its inline x axis</h2>
        <p class="font-mono">justify-self-start|justify-self-center|justify-self-end|</p>
        <p class="font-mono">justify-self-stretch|justify-self-auto</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h3 class="font-mono">justify-self-start</h3>
        <p>align a grid item to the start of its inline x axis</p>
      </div>

      <!-- Align Self -->
      <div>
        <h1>Align Self</h1>
        <h2>control how an individual flex/grid item is aligned along its container's y axis</h2>
        <p class="font-mono">self-start|self-center|self-end|</p>
        <p class="font-mono">self-baseline|self-stretch|self-auto</p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h3 class="font-mono">self-start</h3>
        <p>align an item to the start of the container’s y axis, despite the container’s align-items value</p>
      </div>
    </div>
  </main>
</template>
