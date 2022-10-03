<template>
  <main>
    <h1>Height</h1>
    <h3>set the height of an element</h3>
    <br />

    <p>fixed heights</p>
    <p class="font-mono">h-{0|0.5|1|1.5|2|2.5|3|3.5|4-12|14|16}</p>
    <p class="font-mono">h-{20|24|28|32|36|40|44|48|52|56|60|64|72|80|96}</p>
    <div class="h-28 w-16 border-8 border-indigo-500">h-28</div>
    <div class="h-24 w-16 border-8 border-indigo-500">h-24</div>
    <div class="h-20 w-16 border-8 border-indigo-500">h-20</div>
    <div class="h-16 w-16 border-8 border-indigo-500">h-16</div>
    <div class="h-14 w-16 border-8 border-indigo-500">h-14</div>
    <br />

    <p>percentage widths</p>
    <p class="font-mono">h-{1/2|1/3|2/3|1/4|3/4|1/5|2/5|3/5|4/5|1/6|5/6}</p>
    <p class="font-mono">h-{1/12|5/12|7/12|10/12|11/12|min|max|fit|auto}</p>
    <br />

    <p class="font-mono">h-screen</p>
    <p>make an element span the entire height of the viewport</p>
    <div class="flex h-screen border-8 border-indigo-500">
      <div class="h-1/6 w-20 border-8 border-indigo-300">h-1/6</div>
      <div class="h-2/6 w-20 border-8 border-indigo-300">h-2/6</div>
      <div class="h-3/6 w-20 border-8 border-indigo-300">h-3/6</div>
      <div class="h-4/6 w-20 border-8 border-indigo-300">h-4/6</div>
      <div class="h-5/6 w-20 border-8 border-indigo-300">h-5/6</div>
      <div class="h-6/6 w-20 border-8 border-indigo-300">h-6/6</div>
    </div>
    <br />

    <p class="font-mono">h-full</p>
    <p>set an element’s height to 100% of its parent, as long as the parent has a defined height</p>
    <div class="h-full w-24 border-8 border-indigo-500">h-full</div>
    <br />

    <div class="h-[16rem] w-20 border-8 border-indigo-500"></div>
    <br />

    <p class="font-mono">h-auto</p>
    <p>reset the height</p>
    <br />
  </main>
</template>
