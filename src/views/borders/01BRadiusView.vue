<template>
  <main>
    <h1>Border Radius</h1>
    <br />

    <p class="font-mono">rounded-none, rounded-sm, rounded, rounded-md, rounded-lg</p>
    <p class="font-mono">rounded-xl, rounded-2xl, rounded-3xl, rounded-full</p>
    <button class="rounded-full bg-orange-500 p-2">Click me</button>
    <button class="rounded-none bg-orange-500 p-2">Click me</button>
    <br />
    <br />

    <p class="font-mono">rounded-{t|r|b|l}{-size?}</p>
    <p class="font-mono">rounded-t-none, rounded-t-sm, rounded-t, rounded-t-md, rounded-t-lg</p>
    <p class="font-mono">rounded-t-xl, rounded-t-2xl, rounded-t-3xl, rounded-t-full</p>
    <button class="rounded-t-2xl bg-orange-500 p-2">Click me</button>
    <button class="rounded-r-2xl bg-orange-500 p-2">Click me</button>
    <button class="rounded-b-2xl bg-orange-500 p-2">Click me</button>
    <button class="rounded-l-2xl bg-orange-500 p-2">Click me</button>
    <br />
    <br />

    <p class="font-mono">rounded-{tl|tr|br|bl}{-size?}</p>
    <p class="font-mono">rounded-tl-none, rounded-tl-sm, rounded-tl, rounded-tl-md, rounded-tl-lg</p>
    <p class="font-mono">rounded-tl-xl, rounded-tl-2xl, rounded-tl-3xl, rounded-tl-full</p>
    <button class="rounded-tl-2xl bg-orange-500 p-2">Click me</button>
    <button class="rounded-tr-2xl bg-orange-500 p-2">Click me</button>
    <button class="rounded-br-2xl bg-orange-500 p-2">Click me</button>
    <button class="rounded-bl-2xl bg-orange-500 p-2">Click me</button>
    <br />
    <br />

    <button class="rounded-[12px] bg-orange-500 p-2">Click me</button>
  </main>
</template>
