<template>
  <main class="w-96">
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Flex Basis -->
      <div>
        <h1>Flex Basis</h1>
        <h2>set the initial size of flex items</h2>
        <h3 class="font-mono">basis-{s}</h3>
        <h4 class="font-mono">0 to 12|14|16|20|24|28|32|36|</h4>
        <h4 class="font-mono">40|44|48|52|56|60|64|72|80|96|</h4>
        <h4 class="font-mono">auto|px|full</h4>
        <h4 class="font-mono">0.5|1.5|2.5|3.5|</h4>
        <h4 class="font-mono">1/2|1/3|2/3|</h4>
        <h4 class="font-mono">1/4|2/4|3/4|</h4>
        <h4 class="font-mono">1/5|2/5|3/5|4/5|</h4>
        <h4 class="font-mono">1/6|2/6|3/6|4/6|5/6|</h4>
        <h4 class="font-mono">1/12|2/12|3/12|4/12|5/12|6/12|</h4>
        <h4 class="font-mono">7/12|8/12|9/12|10/12|11/12</h4>

        <div class="flex flex-row border-2 border-pink-500 p-2">
          <div class="basis-1/4 border-2 border-indigo-500 p-2">File</div>
          <div class="basis-1/4 border-2 border-indigo-500 p-2">Edit</div>
          <div class="basis-1/2 border-2 border-indigo-500 p-2">View</div>
        </div>
      </div>

      <!-- Flex Direction -->
      <div>
        <h1>Flex Direction</h1>
        <h2 class="font-mono">flex-{direction}</h2>
        <h3 class="font-mono">row|row-reverse|col|col-reverse</h3>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h5 class="font-mono">flex-row</h5>
            <div class="flex flex-row border-2 border-pink-500 p-2">
              <div class="w-20 border-2 border-indigo-500 p-2">File</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
              <div class="w-20 border-2 border-indigo-500 p-2">View</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">flex-row-reverse</h5>
            <div class="flex flex-row-reverse border-2 border-pink-500 p-2">
              <div class="w-20 border-2 border-indigo-500 p-2">File</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
              <div class="w-20 border-2 border-indigo-500 p-2">View</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">flex-col</h5>
            <div class="flex flex-col border-2 border-pink-500 p-2">
              <div class="w-20 border-2 border-indigo-500 p-2">File</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
              <div class="w-20 border-2 border-indigo-500 p-2">View</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">flex-col-reverse</h5>
            <div class="flex flex-col-reverse border-2 border-pink-500 p-2">
              <div class="w-20 border-2 border-indigo-500 p-2">File</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Edit</div>
              <div class="w-20 border-2 border-indigo-500 p-2">View</div>
              <div class="w-20 border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Flex Wrap -->
      <div>
        <h1>Flex Wrap</h1>
        <h2 class="font-mono">flex-{w}</h2>
        <h3 class="font-mono">wrap|wrap-reverse|nowrap</h3>
      </div>

      <!-- Flex -->
      <div>
        <h1>Flex</h1>
        <h2 class="font-mono">flex-{p}</h2>
        <h3 class="font-mono">1|initial|none|auto</h3>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h4 class="font-mono">flex-1</h4>
            <p>allow a flex item to grow and shrink as needed, ignoring its initial size</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="h-14 w-14 flex-none border-2 border-indigo-500">Box 1</div>
              <div class="w-14 flex-1 border-2 border-indigo-500">Box 2</div>
              <div class="w-32 flex-1 border-2 border-indigo-500">Box 3</div>
            </div>
          </div>

          <div>
            <h4 class="font-mono">flex-initial</h4>
            <p>allow a flex item to shrink but not grow, taking into account its initial size</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="h-14 w-14 flex-none border-2 border-indigo-500">Box 1</div>
              <div class="w-14 flex-initial border-2 border-indigo-500">Box 2</div>
              <div class="w-32 flex-initial border-2 border-indigo-500">Box 3</div>
            </div>
          </div>

          <div>
            <h4 class="font-mono">flex-none</h4>
            <p>prevent a flex item from growing or shrinking</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="h-14 w-14 flex-none border-2 border-indigo-500">Box 1</div>
              <div class="flex-none border-2 border-indigo-500">Box 2</div>
              <div class="w-32 flex-1 border-2 border-indigo-500">Box 3</div>
            </div>
          </div>

          <div>
            <h4 class="font-mono">flex-auto</h4>
            <p>allow a flex item to grow and shrink, taking into account its initial size</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="h-14 w-14 flex-none border-2 border-indigo-500">Box 1</div>
              <div class="w-14 flex-auto border-2 border-indigo-500">Box 2</div>
              <div class="w-32 flex-auto border-2 border-indigo-500">Box 3</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Flex Grow -->
      <div>
        <h1>Flex Grow</h1>
        <h2 class="font-mono">grow|grow-0</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">grow</h3>
            <p>allow a flex item to fill any available space</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="flex-none border-2 border-indigo-500">Box 1</div>
              <div class="grow border-2 border-indigo-500">Box 2</div>
              <div class="border-2 border-indigo-500">Box 3</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">grow-0</h3>
            <p>prevent a flex item from growing</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="flex-none border-2 border-indigo-500">Box 1</div>
              <div class="w-20 grow-0 border-2 border-indigo-500">Box 2</div>
              <div class="border-2 border-indigo-500">Box 3</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Flex Shrink not completed -->
      <div>
        <h1>Flex Shrink</h1>
        <h2 class="font-mono">shrink|shrink-0</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">shrink</h3>
            <p>allow a flex item to shrink if needed</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="w-14 flex-none border-2 border-indigo-500">Box 1</div>
              <div class="w-64 shrink border-2 border-indigo-500">Box 2</div>
              <div class="w-14 flex-none border-2 border-indigo-500">Box 3</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">shrink-0</h3>
            <p>prevent a flex item from shrinking</p>
            <div class="flex border-2 border-pink-500 p-2">
              <div class="w-14 flex-1 border-2 border-indigo-500">Box 1</div>
              <div class="w-20 shrink-0 border-2 border-indigo-500">Box 2</div>
              <div class="w-14 flex-1 border-2 border-indigo-500">Box 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
