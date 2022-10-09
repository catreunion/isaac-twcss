<template>
  <main>
    <h1>Align Items</h1>
    <h2>control how items are aligned along their inline y axis</h2>
    <h3 class="font-mono">items-start|items-end|items-center|</h3>
    <h3 class="font-mono">items-baseline|items-stretch</h3>

    <div class="grid-col-1 grid gap-8 py-8">
      <div>
        <h3 class="font-mono">items-start</h3>
        <p>Align grid items against the start of their inline x axis</p>
        <div class="flex items-start border-2 border-pink-500">
          <div class="border-2 border-indigo-500 py-4">File</div>
          <div class="border-2 border-indigo-500 py-12">Edit</div>
          <div class="border-2 border-indigo-500 py-8">View</div>
          <div class="border-2 border-indigo-500 py-10">Help</div>
        </div>
      </div>
    </div>
  </main>
</template>
