<template>
  <main class="w-96">
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Width -->
      <div>
        <h1>Width</h1>
        <h2 class="font-mono">0|0.5|1|1.5|2|2.5|3|3.5|4-12|14|16|</h2>
        <h2 class="font-mono">20|24|28|32|36|40|44|48|52|56|60|64|72|80|96</h2>
        <h2 class="font-mono">1/2|1/3|2/3|1/4|3/4|1/5|2/5|3/5|4/5|1/6|5/6|</h2>
        <h2 class="font-mono">1/12|5/12|7/12|10/12|11/12|full|min|max|fit|</h2>
        <h2 class="font-mono">w-screen|w-auto</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3>fixed widths</h3>
            <div class="grid-col-1 grid justify-items-center border-2 border-pink-500 p-2">
              <div class="w-80 border-2 border-indigo-500">w-80</div>
              <div class="w-60 border-2 border-indigo-500">w-60</div>
              <div class="w-40 border-2 border-indigo-500">w-40</div>
              <div class="w-20 border-2 border-indigo-500">w-20</div>
            </div>
          </div>

          <div>
            <h3>percentage widths</h3>
            <div class="grid grid-cols-1 justify-items-center">
              <div class="w-80 py-2">
                <div class="flex">
                  <div class="w-1/2 border-2 border-indigo-500">w-1/2</div>
                  <div class="w-1/2 border-2 border-rose-500">w-1/2</div>
                </div>
                <div class="flex">
                  <div class="w-2/5 border-2 border-indigo-500">w-2/5</div>
                  <div class="w-3/5 border-2 border-rose-500">w-3/5</div>
                </div>
                <div class="flex">
                  <div class="w-1/3 border-2 border-indigo-500">w-1/3</div>
                  <div class="w-2/3 border-2 border-rose-500">w-2/3</div>
                </div>
                <div class="flex">
                  <div class="w-1/4 border-2 border-indigo-500">w-1/4</div>
                  <div class="w-3/4 border-2 border-rose-500">w-3/4</div>
                </div>
                <div class="flex">
                  <div class="w-1/5 border-2 border-indigo-500">w-1/5</div>
                  <div class="w-4/5 border-2 border-rose-500">w-4/5</div>
                </div>
                <div class="flex">
                  <div class="w-1/6 border-2 border-indigo-500">w-1/6</div>
                  <div class="w-5/6 border-2 border-rose-500">w-5/6</div>
                </div>
                <div class="w-full border-2 border-rose-500">w-full</div>
              </div>
            </div>

            <div>
              <p>arbitrary values</p>
              <div class="w-[16rem] border-2 border-indigo-500">arbitrary</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Height -->
      <div>
        <h1>Height</h1>
        <h2 class="font-mono">0|0.5|1|1.5|2|2.5|3|3.5|4-12|14|16|</h2>
        <h2 class="font-mono">20|24|28|32|36|40|44|48|52|56|60|64|72|80|96</h2>
        <h2 class="font-mono">1/2|1/3|2/3|1/4|3/4|1/5|2/5|3/5|4/5|1/6|5/6|</h2>
        <h2 class="font-mono">1/12|5/12|7/12|10/12|11/12|min|max|fit|</h2>
        <h2 class="font-mono">screen|full|auto</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3>fixed heights</h3>
            <div class="flex justify-center border-2 border-pink-500 p-2">
              <div class="h-28 border-2 border-indigo-500 p-2">h-28</div>
              <div class="h-24 border-2 border-indigo-500 p-2">h-24</div>
              <div class="h-20 border-2 border-indigo-500 p-2">h-20</div>
              <div class="h-16 border-2 border-indigo-500 p-2">h-16</div>
              <div class="h-14 border-2 border-indigo-500 p-2">h-14</div>
            </div>
          </div>

          <div>
            <h3>centage widths</h3>
            <div class="flex h-80 justify-center border-2 border-pink-500 p-2">
              <div class="h-1/6 border-2 border-indigo-500 p-2">h-1/6</div>
              <div class="h-2/6 border-2 border-indigo-500 p-2">h-2/6</div>
              <div class="h-3/6 border-2 border-indigo-500 p-2">h-3/6</div>
              <div class="h-4/6 border-2 border-indigo-500 p-2">h-4/6</div>
              <div class="h-5/6 border-2 border-indigo-500 p-2">h-5/6</div>
              <div class="h-6/6 border-2 border-indigo-500 p-2">h-6/6</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">h-full</h3>
            <p>set an element’s height to 100% of its parentt</p>
            <div class="h-28 w-20 border-2 border-pink-500 p-2">
              <div class="h-full border-2 border-indigo-500 p-2">h-full</div>
            </div>
          </div>

          <div>
            <p>arbitrary values</p>
            <div class="h-[4rem] w-20 border-2 border-indigo-500 p-2">arbitrary</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
