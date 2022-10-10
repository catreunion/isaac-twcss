<template>
  <main>
    <h1>Height</h1>
    <h2>set the height of an element</h2>

    <div class="grid-col-1 grid gap-8 py-8">
      <div>
        <h3 class="font-mono">h-{0|0.5|1|1.5|2|2.5|3|3.5|4-12|14|16}</h3>
        <h3 class="font-mono">h-{20|24|28|32|36|40|44|48|52|56|60|64|72|80|96}</h3>
        <p>fixed heights</p>
        <div class="flex justify-center border-2 border-pink-500">
          <div class="h-28 w-20 border-2 border-indigo-500 p-2">h-28</div>
          <div class="h-24 w-20 border-2 border-indigo-500 p-2">h-24</div>
          <div class="h-20 w-20 border-2 border-indigo-500 p-2">h-20</div>
          <div class="h-16 w-20 border-2 border-indigo-500 p-2">h-16</div>
          <div class="h-14 w-20 border-2 border-indigo-500 p-2">h-14</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">h-screen</h3>
        <p>make an element span the entire height of the viewport</p>
        <br />
        <h3 class="font-mono">h-{1/2|1/3|2/3|1/4|3/4|1/5|2/5|3/5|4/5|1/6|5/6}</h3>
        <h3 class="font-mono">h-{1/12|5/12|7/12|10/12|11/12|min|max|fit|auto}</h3>
        <p>percentage widths</p>
        <div class="flex h-screen justify-center border-2 border-pink-500">
          <div class="h-1/6 w-20 border-2 border-indigo-500 p-2">h-1/6</div>
          <div class="h-2/6 w-20 border-2 border-indigo-500 p-2">h-2/6</div>
          <div class="h-3/6 w-20 border-2 border-indigo-500 p-2">h-3/6</div>
          <div class="h-4/6 w-20 border-2 border-indigo-500 p-2">h-4/6</div>
          <div class="h-5/6 w-20 border-2 border-indigo-500 p-2">h-5/6</div>
          <div class="h-6/6 w-20 border-2 border-indigo-500 p-2">h-6/6</div>
        </div>
      </div>

      <div>
        <h3 class="font-mono">h-full</h3>
        <p>set an element’s height to 100% of its parent, as long as the parent has a defined height</p>
        <div class="h-28 border-2 border-pink-500">
          <div class="h-full w-20 border-2 border-indigo-500 p-2">h-full</div>
        </div>
      </div>

      <div>
        <p>arbitrary values</p>
        <div class="h-[6rem] w-20 border-2 border-indigo-500 p-2">arbitrary</div>
      </div>

      <div>
        <h3 class="font-mono">h-auto</h3>
        <p>reset the height</p>
      </div>
    </div>
  </main>
</template>
