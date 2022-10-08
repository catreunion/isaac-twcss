<template>
  <main>
    <h1>Justify Content</h1>
    <h2>control how items are positioned along the container's x axis</h2>
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
    <br />

    <h1>Align Content</h1>
    <h2>control how rows are positioned along the container's y axis</h2>
    <h3 class="font-mono">content-start|content-center|content-end|</h3>
    <h3 class="font-mono">content-between|content-around|content-evenly</h3>
    <br />

    <div class="grid-col-1 grid gap-8">
      <div>
        <h3 class="font-mono">content-start</h3>
        <p>pack rows against the start of the container’s y axis</p>
        <div class="grid h-80 grid-cols-1 content-start border-2 border-pink-500">
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-center</h3>
        <p>pack rows along the center of the container’s y axis</p>
        <div class="grid h-80 grid-cols-1 content-center border-2 border-pink-500">
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-end</h3>
        <p>pack rows against the end of the container’s y axis</p>
        <div class="grid h-80 grid-cols-1 content-end border-2 border-pink-500">
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-between</h3>
        <p>distribute rows in a container +</p>
        <p>equal amount of space between each row</p>
        <div class="grid h-80 grid-cols-1 content-between border-2 border-pink-500">
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-around</h3>
        <p>distribute rows in a container +</p>
        <p>equal amount of space around each side of each row</p>
        <div class="grid h-80 grid-cols-1 content-around border-2 border-pink-500">
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">content-evenly</h3>
        <p>distribute rows in a container +</p>
        <p>equal amount of space around each row</p>
        <div class="grid h-80 grid-cols-1 content-evenly border-2 border-pink-500">
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="h-10 w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
