<template>
  <main>
    <div class="grid-col-1 grid gap-6 py-6">
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
    </div>
  </main>
</template>
