<template>
  <main>
    <h1>Width</h1>
    <h2>set the width of an element</h2>

    <div class="grid-col-1 grid gap-8 py-8">
      <div>
        <h3 class="font-mono">w-{0|0.5|1|1.5|2|2.5|3|3.5|4-12|14|16}</h3>
        <h3 class="font-mono">w-{20|24|28|32|36|40|44|48|52|56|60|64|72|80|96}</h3>
        <p>fixed widths</p>
        <div class="grid-col-1 grid justify-items-center border-2 border-pink-500">
          <div class="w-80 border-2 border-indigo-500">w-80</div>
          <div class="w-60 border-2 border-indigo-500">w-60</div>
          <div class="w-40 border-2 border-indigo-500">w-40</div>
          <div class="w-20 border-2 border-indigo-500">w-20</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">w-{1/2|1/3|2/3|1/4|3/4|1/5|2/5|3/5|4/5|1/6|5/6}</h3>
        <h3 class="font-mono">w-{1/12|5/12|7/12|10/12|11/12|full|min|max|fit}</h3>
        <p>percentage widths</p>
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

      <div>
        <h3 class="font-mono">w-screen</h3>
        <p>make an element span the entire width of the viewport</p>
      </div>

      <div>
        <p>arbitrary values</p>
        <div class="w-[16rem] border-2 border-indigo-500">arbitrary</div>
      </div>

      <div>
        <h3 class="font-mono">w-auto</h3>
        <p>reset the width</p>
      </div>
    </div>
  </main>
</template>
