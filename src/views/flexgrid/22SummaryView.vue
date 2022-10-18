<template>
  <main class="w-96">
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Grid Template Columns -->
      <div>
        <h1>Grid Template Columns</h1>
        <h2>create a grid layout with n equally sized columns</h2>
        <h3 class="font-mono">grid-cols-{n}</h3>
        <h4 class="font-mono">1|2|3|4|5|6|7|8|9|10|11|12|none</h4>
        <div
          class="grid grid-cols-1 gap-2 border-2 border-pink-500 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Grid Template Rows -->
      <div>
        <h1>Grid Template Rows</h1>
        <h2>create a grid layout with n equally sized rows</h2>
        <h3 class="font-mono">grid-rows-{n}</h3>
        <h4 class="font-mono">1|2|3|4|5|6|none</h4>
        <div
          class="grid grid-flow-col grid-rows-1 gap-2 border-2 border-pink-500 p-2 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4"
        >
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Gap -->
      <div>
        <h1>Gap</h1>
        <h2>set the gutters between grid and flexbox items</h2>
        <h3 class="font-mono">gap-{s}|gap-x|y-{s}</h3>
        <h4 class="font-mono">0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|</h4>
        <h4 class="font-mono">11|12|14|16|20|24|28|32|36|40|44|48|</h4>
        <h4 class="font-mono">52|56|60|64|72|80|96|px</h4>
      </div>

      <!-- Justify Content -->
      <div>
        <h1>Justify Content</h1>
        <h2>control how columns are positioned along the container's x axis</h2>
        <h3 class="font-mono">justify-{x}</h3>
        <h4 class="font-mono">start|center|end|between|around|*evenly*</h4>
        <div class="flex justify-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Align Content -->
      <div>
        <h1>Align Content</h1>
        <h2>control how rows are positioned along the container's y axis</h2>
        <h3 class="font-mono">content-{y}</h3>
        <h4 class="font-mono">start|center|end|between|around|*evenly*</h4>
        <div class="grid-col-1 grid h-56 content-evenly border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Justify Items -->
      <div>
        <h1>Justify Items</h1>
        <h2>control how grid items are aligned along their inline x axis</h2>
        <h3 class="font-mono">justify-items-{x}</h3>
        <h4 class="font-mono">start|end|center|*stretch*</h4>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Align Items -->
      <div>
        <h1>Align Items</h1>
        <h2>control how items are aligned along the container's y axis</h2>
        <h3 class="font-mono">items-{y}</h3>
        <h4 class="font-mono">*start*|center|end|baseline|stretch</h4>
        <div class="flex items-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 px-2 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 px-2 py-10">Help</div>
        </div>
      </div>

      <!-- Justify Self -->
      <div>
        <h1>Justify Self</h1>
        <h2>control how an individual grid item is aligned along its inline x axis</h2>
        <h3 class="font-mono">justify-self-{x}</h3>
        <h4 class="font-mono">start|center|end|stretch|*auto*</h4>
        <div class="grid grid-cols-3 justify-items-stretch border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="justify-self-auto border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Align Self -->
      <div>
        <h1>Align Self</h1>
        <h2>control how an individual item is aligned along its container's y axis</h2>
        <h3 class="font-mono">self-{y}</h3>
        <h4 class="font-mono">start|center|end|baseline|stretch|*auto*</h4>

        <div class="flex h-20 items-stretch border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 p-2">File</div>
          <div class="w-20 self-auto border-2 border-indigo-500 p-2">Edit</div>
          <div class="w-20 border-2 border-indigo-500 p-2">View</div>
          <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Place Content -->
      <div>
        <h1>Place Content</h1>
        <h2>control how content is justified and aligned at the same time</h2>
        <h3 class="font-mono">place-content-{p}</h3>
        <h4 class="font-mono">start|*center*|end|between|around|evenly|stretch</h4>
        <div class="grid h-40 grid-cols-2 place-content-center gap-2 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Place Items -->
      <div>
        <h1>Place Items</h1>
        <h2>control how items are justified and aligned at the same time</h2>
        <h3 class="font-mono">place-items-{p}</h3>
        <h4 class="font-mono">start|end|*center*|stretch</h4>
        <div class="grid h-48 grid-cols-3 place-items-center gap-2 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>

      <!-- Place Self -->
      <div>
        <h1>Place Self</h1>
        <h2>control how an individual item is justified and aligned at the same time</h2>
        <h3 class="font-mono">place-self-{p}</h3>
        <h4 class="font-mono">start|*center*|end|stretch|auto</h4>
        <div class="grid h-48 grid-cols-3 gap-2 border-2 border-pink-500">
          <div class="border-2 border-indigo-500 p-2">File</div>
          <div class="place-self-center border-2 border-indigo-500 p-2">Edit</div>
          <div class="border-2 border-indigo-500 p-2">View</div>
          <div class="border-2 border-indigo-500 p-2">Mode</div>
          <div class="border-2 border-indigo-500 p-2">Work</div>
          <div class="border-2 border-indigo-500 p-2">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
