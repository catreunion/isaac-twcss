<template>
  <main>
    <h1>Justify Items</h1>
    <h2>control how grid items are aligned along their inline x axis</h2>
    <p class="font-mono">justify-items-start|justify-items-end|</p>
    <p class="font-mono">justify-items-center|justify-items-stretch</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3 class="font-mono">justify-items-start</h3>
        <p>align grid items against the start of their inline x axis</p>
        <div class="grid grid-cols-3 justify-items-start border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-items-end</h3>
        <p>align grid items against the end of their inline x axis</p>
        <div class="grid grid-cols-3 justify-items-end border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-items-center</h3>
        <p>align grid items along the center of their inline x axis</p>
        <div class="grid grid-cols-3 justify-items-center border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-items-stretch</h3>
        <p>stretch grid items along their inline x axis</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>

    <h1>Align Items</h1>
    <h2>control how items are aligned along the container's y axis</h2>
    <p class="font-mono">items-start|items-center|items-end|</p>
    <p class="font-mono">items-baseline|items-stretch</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3 class="font-mono">items-start</h3>
        <p>align items against the start of the container’s y axis</p>
        <div class="flex items-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-center</h3>
        <p>align items along the center of the container’s y axis</p>
        <div class="flex items-center border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-end</h3>
        <p>align items against the end of the container’s y axis</p>
        <div class="flex items-end border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-baseline</h3>
        <p>align items along their baselines</p>
        <div class="flex items-baseline border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-stretch</h3>
        <p>stretch items to fill the container’s y axis</p>
        <div class="flex items-stretch border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
