<template>
  <main class="w-96">
    <h1>Justify Content</h1>
    <h2>control how columns are positioned along the container's x axis</h2>
    <h3 class="font-mono">justify-{x}</h3>
    <h4 class="font-mono">start|center|end|between|around|evenly</h4>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h5 class="font-mono">justify-start</h5>
        <p>pack columns at the start of the container’s x axis</p>
        <div class="flex justify-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-center</h5>
        <p>pack columns at the center of the container’s x axis</p>
        <div class="flex justify-center border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-end</h5>
        <p>pack columns at the end of the container’s x axis</p>
        <div class="flex justify-end border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-between</h5>
        <p>equal amount of space between each item along the container’s x axis</p>
        <div class="flex justify-between border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-around</h5>
        <p>equal amount of space on each side of each item along the container’s x axis</p>
        <div class="flex justify-around border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-evenly</h5>
        <p>equal amount of space around each item along the container’s x axis</p>
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
    <h3 class="font-mono">content-{y}</h3>
    <h4 class="font-mono">start|center|end|between|around|evenly</h4>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h5 class="font-mono">content-start</h5>
        <p>pack rows at the start of the container’s y axis</p>
        <div class="grid-col-1 grid h-56 content-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">content-center</h5>
        <p>pack rows at the center of the container’s y axis</p>
        <div class="grid-col-1 grid h-56 content-center border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">content-end</h5>
        <p>pack rows at the end of the container’s y axis</p>
        <div class="grid-col-1 grid h-56 content-end border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">content-between</h5>
        <p>equal amount of space between each row along the container’s y axis</p>
        <div class="grid-col-1 grid h-56 content-between border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">content-around</h5>
        <p>equal amount of space on each side of each row along the container’s y axis</p>
        <div class="grid-col-1 grid h-56 content-around border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">content-evenly</h5>
        <p>equal amount of space around each row along the container’s y axis</p>
        <div class="grid-col-1 grid h-56 content-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
