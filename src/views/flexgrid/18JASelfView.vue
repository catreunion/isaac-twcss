<template>
  <main>
    <h1>Justify Self</h1>
    <h2>control how an individual grid item is aligned along its inline x axis</h2>
    <h3 class="font-mono">justify-self-{x}</h3>
    <h4 class="font-mono">start|center|end|stretch|auto</h4>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h5 class="font-mono">justify-self-start</h5>
        <p>align an individual grid item against the start of its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-self-center</h5>
        <p>align an individual grid item to the center of its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-center border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-self-end</h5>
        <p>align an individual grid item against the end of its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-end border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-self-stretch</h5>
        <p>stretch an individual grid item to fill the area on its inline x axis</p>
        <div class="grid grid-cols-3 justify-items-start border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-stretch border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">justify-self-auto</h5>
        <p>align an individual grid item based on the value of the grid’s justify-items property</p>
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
    <h3 class="font-mono">self-{x}</h3>
    <h4 class="font-mono">start|center|end|baseline|stretch|auto</h4>

    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h5 class="font-mono">self-start</h5>
        <p>
          align an individual item to the start of the container’s y axis, despite the container’s align-items
          value
        </p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">self-center</h5>
        <p>
          align an individual item along the center of the container’s y axis, despite the container’s
          align-items value
        </p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-center border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">self-end</h5>
        <p>
          align an individual item to the end of the container’s y axis, despite the container’s align-items
          value
        </p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-end border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">self-stretch</h5>
        <p>
          stretch an individual item to fill the container’s y axis, despite the container’s align-items value
        </p>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-stretch border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <div>
        <h5 class="font-mono">self-auto</h5>
        <p>align an individual item based on the value of the container’s align-items property</p>
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
