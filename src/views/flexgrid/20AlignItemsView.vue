<template>
  <main>
    <h1>Align Items</h1>
    <h2>control how items are aligned along the container's y axis</h2>
    <h3 class="font-mono">items-start|items-center|items-end|</h3>
    <h3 class="font-mono">items-baseline|items-stretch</h3>

    <div class="grid-col-1 grid gap-8 py-8">
      <div>
        <h3 class="font-mono">items-start</h3>
        <p>align items against the start of the container’s y axis</p>
        <div class="flex items-start border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-center</h3>
        <p>align items along the center of the container’s y axis</p>
        <div class="flex items-center border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-end</h3>
        <p>align items against the end of the container’s y axis</p>
        <div class="flex items-end border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-baseline</h3>
        <p>align items along the container’s y axis +</p>
        <p>all of their baselines align</p>
        <div class="flex items-baseline border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">items-stretch</h3>
        <p>stretch items to fill the container’s y axis</p>
        <p>all of their stretchs align</p>
        <div class="flex items-stretch border-2 border-pink-500">
          <div class="w-20 border-2 border-indigo-500 py-4">File</div>
          <div class="w-20 border-2 border-indigo-500 py-12">Edit</div>
          <div class="w-20 border-2 border-indigo-500 py-8">View</div>
          <div class="w-20 border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
