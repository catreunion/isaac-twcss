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
  </main>
</template>

<script setup></script>
