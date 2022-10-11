<template>
  <main>
    <h1>Place Self</h1>
    <h2>control how an individual item is justified and aligned at the same time</h2>
    <p class="font-mono">place-self-start|place-self-center|place-self-end|</p>
    <p class="font-mono">place-self-stretch|place-self-auto</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3>place-self-start</h3>
        <p>align an item to the start on both axes</p>
        <div class="grid h-48 grid-cols-3 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="place-self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3>place-self-end</h3>
        <p>align an item to the end on both axes</p>
        <div class="grid h-48 grid-cols-3 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="place-self-end border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3>place-self-center</h3>
        <p>align an item at the center on both axes</p>
        <div class="grid h-48 grid-cols-3 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="place-self-center border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3>place-self-stretch</h3>
        <p>stretch an item on both axes</p>
        <div class="grid h-48 grid-cols-3 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="place-self-stretch border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3>place-self-auto</h3>
        <p>align an item based on the value of the container’s place-items property</p>
        <div class="grid h-48 grid-cols-3 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="place-self-auto border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
