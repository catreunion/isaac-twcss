<template>
  <main>
    <h1>Align Content</h1>
    <h3>control how rows are positioned in multi-row flex and grid containers</h3>
    <p class="font-mono">content-start|content-end|content-center|</p>
    <p class="font-mono">content-between|content-around|content-evenly</p>
    <br />

    <p class="font-mono">content-start</p>
    <p>pack rows in a container against the start of the cross axis</p>
    <div class="grid h-56 grid-cols-3 content-start gap-4 border-8 border-orange-500">
      <div class="h-14 w-14 border-8 border-indigo-100">Box 1</div>
      <div class="h-14 w-14 border-8 border-indigo-300">Box 2</div>
      <div class="h-14 w-14 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-14 border-8 border-indigo-700">Box 4</div>
      <div class="h-14 w-14 border-8 border-indigo-900">Box 5</div>
    </div>
    <br />

    <p class="font-mono">content-end</p>
    <p>pack rows in a container against the end of the cross axis</p>
    <div class="grid h-56 grid-cols-3 content-end gap-4 border-8 border-orange-500">
      <div class="h-14 w-14 border-8 border-indigo-100">Box 1</div>
      <div class="h-14 w-14 border-8 border-indigo-300">Box 2</div>
      <div class="h-14 w-14 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-14 border-8 border-indigo-700">Box 4</div>
      <div class="h-14 w-14 border-8 border-indigo-900">Box 5</div>
    </div>
    <br />

    <p class="font-mono">content-center</p>
    <p>pack rows in a container in the center of the cross axis</p>
    <div class="grid h-56 grid-cols-3 content-center gap-4 border-8 border-orange-500">
      <div class="h-14 w-14 border-8 border-indigo-100">Box 1</div>
      <div class="h-14 w-14 border-8 border-indigo-300">Box 2</div>
      <div class="h-14 w-14 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-14 border-8 border-indigo-700">Box 4</div>
      <div class="h-14 w-14 border-8 border-indigo-900">Box 5</div>
    </div>
    <br />

    <p class="font-mono">content-between</p>
    <p>distribute rows in a container such that there is an equal amount of space between each line</p>
    <div class="grid h-56 grid-cols-3 content-between gap-4 border-8 border-orange-500">
      <div class="h-14 w-14 border-8 border-indigo-100">Box 1</div>
      <div class="h-14 w-14 border-8 border-indigo-300">Box 2</div>
      <div class="h-14 w-14 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-14 border-8 border-indigo-700">Box 4</div>
      <div class="h-14 w-14 border-8 border-indigo-900">Box 5</div>
    </div>
    <br />

    <p class="font-mono">content-around</p>
    <p>distribute rows in a container such that there is an equal amount of space around each line</p>
    <div class="grid h-56 grid-cols-3 content-around gap-4 border-8 border-orange-500">
      <div class="h-14 w-14 border-8 border-indigo-100">Box 1</div>
      <div class="h-14 w-14 border-8 border-indigo-300">Box 2</div>
      <div class="h-14 w-14 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-14 border-8 border-indigo-700">Box 4</div>
      <div class="h-14 w-14 border-8 border-indigo-900">Box 5</div>
    </div>
    <br />

    <p class="font-mono">content-evenly</p>
    <p>
      distribute rows in a container such that there is an equal amount of space around each item, but also
      accounting for the doubling of space you would normally see between each item when using content-around
    </p>
    <div class="grid h-56 grid-cols-3 content-evenly gap-4 border-8 border-orange-500">
      <div class="h-14 w-14 border-8 border-indigo-100">Box 1</div>
      <div class="h-14 w-14 border-8 border-indigo-300">Box 2</div>
      <div class="h-14 w-14 border-8 border-indigo-500">Box 3</div>
      <div class="h-14 w-14 border-8 border-indigo-700">Box 4</div>
      <div class="h-14 w-14 border-8 border-indigo-900">Box 5</div>
    </div>
    <br />
  </main>
</template>
