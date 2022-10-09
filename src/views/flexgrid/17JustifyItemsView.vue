<template>
  <main>
    <h1>Justify Items</h1>
    <h2>control how grid items are aligned along their inline x axis</h2>
    <h3 class="font-mono">justify-items-start|justify-items-end|</h3>
    <h3 class="font-mono">justify-items-center|justify-items-stretch</h3>

    <div class="grid-col-1 grid gap-8 py-8">
      <div>
        <h3 class="font-mono">justify-items-start</h3>
        <p>Align grid items against the start of their inline x axis</p>
        <div class="grid grid-cols-3 justify-items-start border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-items-end</h3>
        <p>Align grid items against the end of their inline x axis</p>
        <div class="grid grid-cols-3 justify-items-end border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-items-center</h3>
        <p>Align grid items along their inline x axis</p>
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
  </main>
</template>
