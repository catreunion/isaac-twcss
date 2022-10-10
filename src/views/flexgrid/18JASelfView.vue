<template>
  <main>
    <h1>Justify Self</h1>
    <h2>control how an individual grid item is aligned along its inline x axis</h2>
    <p class="font-mono">justify-self-start|justify-self-center|justify-self-end|</p>
    <p class="font-mono">justify-self-stretch|justify-self-auto</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3 class="font-mono">justify-self-start</h3>
        <p>align a grid item to the start of its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-self-center</h3>
        <p>align a grid item along the center of its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-center border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-self-end</h3>
        <p>align a grid item to the end of its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-end border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-self-stretch</h3>
        <p>stretch a grid item to fill the grid area on its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-start border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-stretch border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-self-auto</h3>
        <p>align an item based on the value of the grid’s justify-items property</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-auto border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>

    <h1>Align Self</h1>
    <h2>control how an individual flex/grid item is aligned along its container's y axis</h2>
    <p class="font-mono">self-start|self-center|self-end|</p>
    <p class="font-mono">self-baseline|self-stretch|self-auto</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3 class="font-mono">self-start</h3>
        <p>align an item to the start of the container’s y axis, despite the container’s align-items value</p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">self-center</h3>
        <p>
          align an item along the center of the container’s y axis, despite the container’s align-items value
        </p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-center border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">self-end</h3>
        <p>align an item to the end of the container’s y axis, despite the container’s align-items value</p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-end border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">self-stretch</h3>
        <p>stretch an item to fill the container’s y axis, despite the container’s align-items value</p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-stretch border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">self-auto</h3>
        <p>align an item based on the value of the container’s align-items property</p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-auto border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
