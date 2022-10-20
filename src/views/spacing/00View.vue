<template>
  <main>
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Padding -->
      <div>
        <h1>Padding</h1>
        <h2 class="font-mono">0|0.5|1|1.5|2|2.5|3|3.5|</h2>
        <h2 class="font-mono">4|5|6|7|8|9|10|11|12|</h2>
        <h2 class="font-mono">14|16|20|24|28|32|36|40|44|48</h2>
        <h2 class="font-mono">52|56|60|64|72|80|96</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">p{t|r|b|l}-{size}</h3>
            <div class="flex justify-center border-2 border-pink-500">
              <div class="border-2 border-indigo-500 pt-3">File</div>
              <div class="border-2 border-indigo-500 pr-4">Edit</div>
              <div class="border-2 border-indigo-500 pb-9">View</div>
              <div class="border-2 border-indigo-500 pl-4">Help</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">p{x|y}-{size}</h3>
            <div class="flex justify-center border-2 border-pink-500">
              <div class="border-2 border-indigo-500 px-4">File</div>
              <div class="border-2 border-indigo-500 py-4">Edit</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">p-{size}</h3>
            <div class="flex justify-center border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-4">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
            </div>
          </div>

          <div>
            <h3>arbitrary values</h3>
            <div class="flex justify-center border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-[15px]">File</div>
              <div class="border-2 border-indigo-500 p-[5px]">Edit</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Margin -->
      <div>
        <h1>Margin</h1>
        <h2 class="font-mono">0|0.5|1|1.5|2|2.5|3|3.5|</h2>
        <h2 class="font-mono">4|5|6|7|8|9|10|11|12|</h2>
        <h2 class="font-mono">14|16|20|24|28|32|36|40|44|48</h2>
        <h2 class="font-mono">52|56|60|64|72|80|96</h2>
        <h2 class="font-mono">m-auto|mx-auto|my-auto|</h2>
        <h2 class="font-mono">mt-auto|mr-auto|mb-auto|ml-auto</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">m{t|r|b|l}-{size}</h3>
            <div class="flex justify-center border-2 border-rose-500">
              <div class="mt-3 border-2 border-indigo-500">File</div>
              <div class="mr-4 border-2 border-indigo-500">Edit</div>
              <div class="mb-9 border-2 border-indigo-500">View</div>
              <div class="ml-4 border-2 border-indigo-500">Help</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">m{x|y}-{size}</h3>
            <div class="flex justify-center border-2 border-rose-500">
              <div class="mx-4 border-2 border-indigo-500">File</div>
              <div class="my-4 border-2 border-indigo-500">Edit</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">m-{size}</h3>
            <div class="flex justify-center border-2 border-rose-500">
              <div class="m-4 border-2 border-indigo-500">File</div>
              <div class="m-2 border-2 border-indigo-500">Edit</div>
            </div>
          </div>

          <div>
            <h3>negative values</h3>
            <div class="h-16 w-36 bg-sky-400 opacity-20"></div>
            <div class="-mt-8 h-16 w-16 bg-sky-300">File</div>
          </div>
        </div>
      </div>

      <!-- Space Between -->
      <div>
        <h1>Space Between</h1>
        <h2 class="font-mono">space-x|y-{amount}</h2>
        <h3 class="font-mono">0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|</h3>
        <h3 class="font-mono">11|12|14|16|20|24|28|32|36|40|44|48|</h3>
        <h3 class="font-mono">52|56|60|64|72|80|96|px|</h3>
        <h3 class="font-mono">reverse</h3>

        <div class="grid-col-1 grid gap-3 py-3">
          <div class="flex justify-center space-x-4 border-2 border-rose-500">
            <div class="border-2 border-indigo-500 p-2">File</div>
            <div class="border-2 border-indigo-500 p-2">Edit</div>
            <div class="border-2 border-indigo-500 p-2">View</div>
          </div>

          <div class="flex flex-col space-y-4 border-2 border-rose-500">
            <div class="border-2 border-indigo-500 p-2">File</div>
            <div class="border-2 border-indigo-500 p-2">Edit</div>
            <div class="border-2 border-indigo-500 p-2">View</div>
          </div>

          <div class="flex flex-row-reverse space-x-4 space-x-reverse border-2 border-rose-500">
            <div class="border-2 border-indigo-500 p-2">File</div>
            <div class="border-2 border-indigo-500 p-2">Edit</div>
            <div class="border-2 border-indigo-500 p-2">View</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
