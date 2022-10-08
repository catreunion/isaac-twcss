<template>
  <main>
    <h1>Align Items</h1>
    <h2>control how flex and grid items are positioned along a container's y axis</h2>
    <p class="font-mono">items-start|items-end|items-center|</p>
    <p class="font-mono">items-baseline|items-stretch</p>
    <br />

    <div class="grid-col-1 grid gap-8">
      <div>
        <h3 class="font-mono">items-start</h3>
        <p>align items to the start of the container’s y axis</p>
        <div class="flex items-start">
          <div class="h-14 w-20 border-2 border-indigo-200 p-2">Box 1</div>
          <div class="h-20 w-20 border-2 border-indigo-500 p-2">Box 2</div>
          <div class="h-26 w-20 border-2 border-indigo-800 p-2">Box 3</div>
        </div>

        <h3 class="font-mono">items-center</h3>
        <p>align items along the center of the container’s y axis</p>
        <div class="flex items-center">
          <div class="h-14 w-20 border-2 border-indigo-200 p-2">Box 1</div>
          <div class="h-20 w-20 border-2 border-indigo-500 p-2">Box 2</div>
          <div class="h-26 w-20 border-2 border-indigo-800 p-2">Box 3</div>
        </div>

        <h3 class="font-mono">items-end</h3>
        <p>align items to the end of the container’s y axis</p>
        <div class="flex items-end">
          <div class="h-14 w-20 border-2 border-indigo-200 p-2">Box 1</div>
          <div class="h-20 w-20 border-2 border-indigo-500 p-2">Box 2</div>
          <div class="h-26 w-20 border-2 border-indigo-800 p-2">Box 3</div>
        </div>

        <h3 class="font-mono">items-baseline</h3>
        <p>align items along the container’s y axis +</p>
        <p>all of their baselines align</p>
        <div class="flex items-baseline">
          <div class="h-14 w-20 border-2 border-indigo-200 p-2">Box 1</div>
          <div class="h-20 w-20 border-2 border-indigo-500 p-2">Box 2</div>
          <div class="h-26 w-20 border-2 border-indigo-800 p-2">Box 3</div>
        </div>

        <h3 class="font-mono">items-stretch</h3>
        <p>stretch items to fill the container’s cross axis</p>
        <div class="flex items-stretch">
          <div class="h-14 w-20 border-2 border-indigo-200 p-2">Box 1</div>
          <div class="h-20 w-20 border-2 border-indigo-500 p-2">Box 2</div>
          <div class="h-26 w-20 border-2 border-indigo-800 p-2">Box 3</div>
        </div>
      </div>
    </div>
  </main>
</template>
