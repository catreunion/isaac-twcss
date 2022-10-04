<template>
  <main>
    <h1>Flex</h1>
    <h3>control how flex items grow and shrink</h3>
    <p class="font-mono">flex-initial|flex-1|flex-auto|flex-none</p>
    <br />

    <p class="font-mono">flex-initial</p>
    <p>allow a flex item to shrink but not grow, taking into account its initial size</p>
    <div class="flex">
      <div class="h-14 w-14 flex-none">Box 1</div>
      <div class="w-64 flex-initial">Box 2</div>
      <div class="w-32 flex-initial">Box 3</div>
    </div>
    <br />

    <p class="font-mono">flex-1</p>
    <p>allow a flex item to grow and shrink, ignoring its initial size</p>
    <div class="flex">
      <div class="h-14 w-14 flex-none border-8 border-indigo-500">Box 1</div>
      <div class="w-64 flex-1 border-8 border-indigo-500">Box 2</div>
      <div class="w-32 flex-1 border-8 border-indigo-500">Box 3</div>
    </div>
    <br />

    <p class="font-mono">flex-auto</p>
    <p>allow a flex item to grow and shrink, taking into account its initial size</p>
    <div class="flex">
      <div class="flex-none border-8 border-indigo-500">Box 1</div>
      <div class="w-64 flex-auto border-8 border-indigo-500">Box 2</div>
      <div class="w-32 flex-auto border-8 border-indigo-500">Box 3</div>
    </div>
    <br />

    <p class="font-mono">flex-none</p>
    <p>prevent a flex item from growing or shrinking</p>
    <div class="flex">
      <div class="h-14 w-14 flex-none border-8 border-indigo-500">Box 1</div>
      <div class="flex-none border-8 border-indigo-500">Box 2</div>
      <div class="w-32 flex-1 border-8 border-indigo-500">Box 3</div>
    </div>
    <br />
  </main>
</template>
