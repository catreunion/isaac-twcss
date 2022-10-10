<template>
  <main>
    <h1>Justify Content</h1>
    <h2>control how columns are positioned along the container's x axis</h2>
    <p class="font-mono">justify-start|justify-center|justify-end|</p>
    <p class="font-mono">justify-between|justify-around|justify-evenly</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3 class="font-mono">justify-start</h3>
        <p>pack columns against the start of the container’s x axis</p>
        <div class="flex justify-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-center</h3>
        <p>pack columns along the center of the container’s x axis</p>
        <div class="flex justify-center border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-end</h3>
        <p>pack columns against the end of the container’s x axis</p>
        <div class="flex justify-end border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-between</h3>
        <p>justify columns along the container’s x axis +</p>
        <p>equal amount of space between each item</p>
        <div class="flex justify-between border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-around</h3>
        <p>justify columns along the container’s x axis +</p>
        <p>equal amount of space on each side of each item</p>
        <div class="flex justify-around border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">justify-evenly</h3>
        <p>justify columns along the container’s x axis +</p>
        <p>equal amount of space around each item</p>
        <div class="flex justify-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>

    <h1>Align Content</h1>
    <h2>control how rows are positioned along the container's y axis</h2>
    <p class="font-mono">content-start|content-center|content-end|</p>
    <p class="font-mono">content-between|content-around|content-evenly</p>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h3 class="font-mono">content-start</h3>
        <p>pack rows against the start of the container’s y axis</p>
        <div class="grid-col-1 grid h-80 content-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-center</h3>
        <p>pack rows along the center of the container’s y axis</p>
        <div class="grid-col-1 grid h-80 content-center border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-end</h3>
        <p>pack rows against the end of the container’s y axis</p>
        <div class="grid-col-1 grid h-80 content-end border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-between</h3>
        <p>distribute rows along the container’s y axis +</p>
        <p>equal amount of space between each row</p>
        <div class="grid-col-1 grid h-80 content-between border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-around</h3>
        <p>distribute rows along the container’s y axis +</p>
        <p>equal amount of space around each side of each row</p>
        <div class="grid-col-1 grid h-80 content-around border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-evenly</h3>
        <p>distribute rows along the container’s y axis +</p>
        <p>equal amount of space around each row</p>
        <div class="grid-col-1 grid h-80 content-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
