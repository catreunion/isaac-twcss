<template>
  <main class="w-96">
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Grid Column Start/End -->
      <div>
        <h1>Grid Column Start/End</h1>
        <h2>control how elements are sized and placed across grid columns</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">col-span-{n}</h3>
            <h4 class="font-mono">1|2|3|4|5|6|7|8|9|10|11|12|full|auto</h4>
            <p>make an element span n columns</p>
            <div class="grid grid-cols-3 gap-4 border-2 border-rose-500 p-2">
              <div class="border-2 border-indigo-500">01</div>
              <div class="border-2 border-indigo-500">02</div>
              <div class="border-2 border-indigo-500">03</div>
              <div class="col-span-2 border-2 border-indigo-500">04</div>
              <div class="border-2 border-indigo-500">05</div>
              <div class="border-2 border-indigo-500">06</div>
              <div class="col-span-2 border-2 border-indigo-500">07</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">col-start|end-{n}</h3>
            <h4 class="font-mono">1|2|3|4|5|6|7|8|9|10|11|12|13|auto</h4>
            <p>make an element start or end at the nth grid line</p>
            <div class="grid grid-cols-6 gap-4 border-2 border-rose-500 p-2">
              <div class="col-span-4 col-start-2 border-2 border-indigo-500">01</div>
              <div class="col-start-1 col-end-3 border-2 border-indigo-500">02</div>
              <div class="col-span-2 col-end-7 border-2 border-indigo-500">03</div>
              <div class="col-start-1 col-end-7 border-2 border-indigo-500">04</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid Row Start/End -->
      <div>
        <h1>Grid Row Start/End</h1>
        <h2>control how elements are sized and placed across grid rows</h2>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h3 class="font-mono">row-span-{n}</h3>
            <h4 class="font-mono">1|2|3|4|5|6|full-height</h4>
            <p>make an element span n rows</p>
            <div class="grid grid-flow-col grid-rows-3 gap-4 border-2 border-rose-500 p-2">
              <div class="row-span-3 border-2 border-indigo-500">01</div>
              <div class="col-span-2 border-2 border-indigo-500">02</div>
              <div class="col-span-2 row-span-2 border-2 border-indigo-500">03</div>
            </div>
          </div>

          <div>
            <h3 class="font-mono">row-start|end-{n}</h3>
            <h4 class="font-mono">1|2|3|4|5|6|7|auto</h4>
            <p>make an element start or end at the nth grid line</p>
            <div class="grid h-40 grid-flow-col grid-rows-3 gap-4 border-2 border-rose-500 p-2">
              <div class="row-span-2 row-start-2 border-2 border-indigo-500">01</div>
              <div class="row-span-2 row-end-3 border-2 border-indigo-500">02</div>
              <div class="row-start-1 row-end-4 border-2 border-indigo-500">03</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid Auto Flow -->
      <div>
        <h1>Grid Auto Flow</h1>
        <h2>control how elements in a grid are auto-placed</h2>
        <h3 class="font-mono">grid-flow-{keyword}</h3>
        <h4 class="font-mono">row|col|dense|row-dense|col-dense</h4>

        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 border-2 border-pink-500 p-2">
          <div class="col-span-2 border-2 border-indigo-500 p-2">01</div>
          <div class="col-span-2 border-2 border-indigo-500 p-2">02</div>
          <div class="border-2 border-indigo-500 p-2">03</div>
          <div class="border-2 border-indigo-500 p-2">04</div>
          <div class="border-2 border-indigo-500 p-2">05</div>
        </div>
      </div>

      <!-- Grid Auto Columns -->
      <div>
        <h1>Grid Auto Columns</h1>
        <h2>control the size of implicitly-created grid columns</h2>
        <h3 class="font-mono">auto-cols-{size}</h3>
        <h4 class="font-mono">auto|min|max|fr</h4>

        <div class="grid auto-cols-max grid-flow-col border-2 border-pink-500 p-2">
          <div class="border-2 border-indigo-500 p-2">01</div>
          <div class="border-2 border-indigo-500 p-2">02</div>
          <div class="border-2 border-indigo-500 p-2">03</div>
        </div>
      </div>

      <!-- Grid Auto Rows -->
      <div>
        <h1>Grid Auto Rows</h1>
        <h2>control the size of implicitly-created grid rows</h2>
        <h3 class="font-mono">auto-rows-{size}</h3>
        <h4 class="font-mono">auto|min|max|fr</h4>

        <div class="grid grid-flow-row auto-rows-max border-2 border-pink-500 p-2">
          <div class="border-2 border-indigo-500 p-2">01</div>
          <div class="border-2 border-indigo-500 p-2">02</div>
          <div class="border-2 border-indigo-500 p-2">03</div>
        </div>
      </div>
    </div>
  </main>
</template>
