<template>
  <main>
    <div class="grid-col-1 grid gap-6 py-6">
      <div>
        <h1>Grid Column Start/End</h1>
        <h2>control how elements are sized and placed across grid columns</h2>

        <div class="grid-col-1 grid gap-6 py-6">
          <div>
            <h3>col-span-{n}</h3>
            <p>n : 1|2|3|4|5|6|7|8|9|10|11|12|full|auto</p>
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
            <h3>col-start|end-{n}</h3>
            <p>n : 1|2|3|4|5|6|7|8|9|10|11|12|13|auto</p>
            <p>make an element start or end at the nth grid line</p>
            <p>
              CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line
              1 and end at line 7
            </p>
            <div class="grid grid-cols-6 gap-4 border-2 border-rose-500 p-2">
              <div class="col-span-4 col-start-2 border-2 border-indigo-500">01</div>
              <div class="col-start-1 col-end-3 border-2 border-indigo-500">02</div>
              <div class="col-span-2 col-end-7 border-2 border-indigo-500">03</div>
              <div class="col-start-1 col-end-7 border-2 border-indigo-500">04</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>row-auto</p>

        <h1>Grid Row Start/End</h1>
        <h2>control how elements are sized and placed across grid rows</h2>

        <div class="grid-col-1 grid gap-6 py-6">
          <div>
            <h3>row-span-{n}</h3>
            <p>n : 1|2|3|4|5|6|full-height</p>
            <p>make an element span n rows</p>
            <div class="grid grid-flow-col grid-rows-3 gap-4 border-2 border-rose-500 p-2">
              <div class="row-span-3 border-2 border-indigo-500">01</div>
              <div class="col-span-2 border-2 border-indigo-500">02</div>
              <div class="col-span-2 row-span-2 border-2 border-indigo-500">03</div>
            </div>
          </div>

          <div>
            <h3>row-start|end-{n}</h3>
            <p>n : 1|2|3|4|5|6|7|auto</p>
            <p>make an element start or end at the nth grid line</p>
            <p>
              CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1
              and end at line 4
            </p>
            <div class="grid h-40 grid-flow-col grid-rows-3 gap-4 border-2 border-rose-500 p-2">
              <div class="row-span-2 row-start-2 border-2 border-indigo-500">01</div>
              <div class="row-span-2 row-end-3 border-2 border-indigo-500">02</div>
              <div class="row-start-1 row-end-4 border-2 border-indigo-500">03</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
