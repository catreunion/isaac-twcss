<template>
  <main class="w-96">
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Justify Content -->
      <div>
        <h1>Justify Content</h1>
        <h2>control how columns are positioned along the container's x axis</h2>
        <h3 class="font-mono">justify-{x}</h3>
        <h4 class="font-mono">start|center|end|between|around|evenly</h4>
        <div class="flex justify-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">justify-evenly</h5>
        <p>equal amount of space around each item along the container’s x axis</p>
      </div>

      <!-- Align Content -->
      <div>
        <h1>Align Content</h1>
        <h2>control how rows are positioned along the container's y axis</h2>
        <h3 class="font-mono">content-{y}</h3>
        <h4 class="font-mono">start|center|end|between|around|evenly</h4>
        <div class="grid-col-1 grid h-56 content-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">content-evenly</h5>
        <p>equal amount of space around each row along the container’s y axis</p>
      </div>

      <!-- Justify Items -->
      <div>
        <h1>Justify Items</h1>
        <h2>control how grid items are aligned along their inline x axis</h2>
        <h3 class="font-mono">justify-items-{x}</h3>
        <h4 class="font-mono">start|end|center|stretch</h4>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">justify-items-stretch</h5>
        <p>stretch grid items along their inline x axis</p>
      </div>

      <!-- Align Items -->
      <div>
        <h1>Align Items</h1>
        <h2>control how items are aligned along the container's y axis</h2>
        <h3 class="font-mono">items-{y}</h3>
        <h4 class="font-mono">start|center|end|baseline|stretch</h4>
        <div class="flex items-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 px-2 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-10">Help</div>
        </div>
        <h5 class="font-mono">items-start</h5>
        <p>align items at the start of the container’s y axis</p>
      </div>

      <!-- Justify Self -->
      <div>
        <h1>Justify Self</h1>
        <h2>control how an individual grid item is aligned along its inline x axis</h2>
        <h3 class="font-mono">justify-self-{x}</h3>
        <h4 class="font-mono">start|center|end|stretch|auto</h4>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">justify-self-start</h5>
        <p>align an individual grid item at the start of its inline x axis</p>
      </div>

      <!-- Align Self -->
      <div>
        <h1>Align Self</h1>
        <h2>control how an individual flex/grid item is aligned along its container's y axis</h2>
        <h3 class="font-mono">self-{y}</h3>
        <h4 class="font-mono">start|center|end|baseline|stretch|auto</h4>
        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="self-start border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">self-start</h5>
        <p>
          align an individual item at the start of the container’s y axis, despite the container’s align-items
          value
        </p>
      </div>

      <!-- Place Content -->
      <div>
        <h1>Place Content</h1>
        <h2>control how content is justified and aligned at the same time</h2>
        <h3 class="font-mono">place-content-{p}</h3>
        <h4 class="font-mono">start|center|end|between|around|evenly|stretch</h4>
        <div class="grid h-48 grid-cols-2 place-content-evenly gap-2 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">place-content-evenly</h5>
      </div>

      <!-- Place Items -->
      <div>
        <h1>Place Items</h1>
        <h2>control how items are justified and aligned at the same time</h2>
        <h3 class="font-mono">place-items-{p}</h3>
        <h4 class="font-mono">start|end|center|stretch</h4>
        <div class="grid h-48 grid-cols-3 place-items-center gap-2 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">place-items-center</h5>
      </div>

      <!-- Place Self -->
      <div>
        <h1>Place Self</h1>
        <h2>control how an individual item is justified and aligned at the same time</h2>
        <h3 class="font-mono">place-self-{p}</h3>
        <h4 class="font-mono">start|center|end|stretch|auto</h4>
        <div class="grid h-48 grid-cols-3 gap-2 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="place-self-stretch border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
        <h5 class="font-mono">place-self-stretch</h5>
      </div>
    </div>
  </main>
</template>
