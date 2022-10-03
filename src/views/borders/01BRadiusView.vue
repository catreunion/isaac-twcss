<template>
  <main>
    <h1>Border Radius</h1>
    <h3>control the border radius of an element</h3>
    <p class="font-mono">
      rounded-none, rounded-sm, rounded, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl,
      rounded-full
    </p>
    <br />

    <p class="font-mono">rounded-{t|r|b|l}{-size?}</p>
    <div>
      <p class="font-mono">
        rounded-t-none, rounded-t-sm, rounded-t, rounded-t-md, rounded-t-lg, rounded-t-xl, rounded-t-2xl,
        rounded-t-3xl, rounded-t-full
      </p>
      <p class="font-mono">
        rounded-r-none, rounded-r-sm, rounded-r, rounded-r-md, rounded-r-lg, rounded-r-xl, rounded-r-2xl,
        rounded-r-3xl, rounded-r-full
      </p>
      <p class="font-mono">
        rounded-b-none, rounded-b-sm, rounded-b, rounded-b-md, rounded-b-lg, rounded-b-xl, rounded-b-2xl,
        rounded-b-3xl, rounded-b-full
      </p>
      <p class="font-mono">
        rounded-l-none, rounded-l-sm, rounded-l, rounded-l-md, rounded-l-lg, rounded-l-xl, rounded-l-2xl,
        rounded-l-3xl, rounded-l-full
      </p>
      <br />
    </div>

    <p class="font-mono">rounded-{tl|tr|br|bl}{-size?}</p>
    <div>
      <p class="font-mono">
        rounded-tl-none, rounded-tl-sm, rounded-tl, rounded-tl-md, rounded-tl-lg, rounded-tl-xl,
        rounded-tl-2xl, rounded-tl-3xl, rounded-tl-full
      </p>
      <p class="font-mono">
        rounded-tr-none, rounded-tr-sm, rounded-tr, rounded-tr-md, rounded-tr-lg, rounded-tr-xl,
        rounded-tr-2xl, rounded-tr-3xl, rounded-tr-full
      </p>
      <p class="font-mono">
        rounded-br-none, rounded-br-sm, rounded-br, rounded-br-md, rounded-br-lg, rounded-br-xl,
        rounded-br-2xl, rounded-br-3xl, rounded-br-full
      </p>
      <p class="font-mono">
        rounded-bl-none, rounded-bl-sm, rounded-bl, rounded-bl-md, rounded-bl-lg, rounded-bl-xl,
        rounded-bl-2xl, rounded-bl-3xl, rounded-bl-full
      </p>
      <br />
    </div>

    <button class="rounded-full bg-orange-500 p-2">Click me</button>
    <button class="rounded-none bg-orange-500 p-2">Click me</button>
    <button class="rounded-t-lg bg-orange-500 p-2">Click me</button>
    <button class="rounded-r-lg bg-orange-500 p-2">Click me</button>
    <button class="rounded-b-lg bg-orange-500 p-2">Click me</button>
    <button class="rounded-l-lg bg-orange-500 p-2">Click me</button>
    <br />

    <button class="rounded-tl-lg bg-orange-500 p-2">Click me</button>
    <button class="rounded-tr-lg bg-orange-500 p-2">Click me</button>
    <button class="rounded-br-lg bg-orange-500 p-2">Click me</button>
    <button class="rounded-bl-lg bg-orange-500 p-2">Click me</button>
    <br />

    <button class="rounded-[12px] bg-orange-500 p-2">Click me</button>
  </main>
</template>

<script setup></script>
