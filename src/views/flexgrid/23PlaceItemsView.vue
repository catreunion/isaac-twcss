<template>
  <main>
    <h1>Place Items</h1>
    <h2>control how items are justified and aligned at the same time</h2>
    <p class="font-mono">place-items-start|place-items-end|</p>
    <p class="font-mono">place-items-center|place-items-stretch</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3>place-items-start</h3>
        <p>place grid items on the start of their grid areas on both axes</p>
        <div class="grid h-48 grid-cols-3 place-items-start border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3>place-items-end</h3>
        <p>place grid items on the end of their grid areas on both axes</p>
        <div class="grid h-48 grid-cols-3 place-items-end border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3>place-items-center</h3>
        <p>place grid items on the center of their grid areas on both axes</p>
        <div class="grid h-48 grid-cols-3 place-items-center border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3>place-content-stretch</h3>
        <p>stretch items along their grid areas on both axes:</p>
        <div class="grid h-48 grid-cols-3 place-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
