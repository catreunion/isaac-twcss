<template>
  <main class="w-96">
    <div class="grid-col-1 grid gap-6 py-6">
      <!-- Place Content -->
      <div>
        <h1>Place Content</h1>
        <h2>control how content is justified and aligned at the same time</h2>
        <h3 class="font-mono">place-content-{p}</h3>
        <h4 class="font-mono">start|center|end|between|around|evenly|stretch</h4>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h5 class="font-mono">place-content-start</h5>
            <div class="grid h-40 grid-cols-2 place-content-start gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div class="border-2 border-green-500 p-2">
            <h5 class="font-mono">place-content-center</h5>
            <div class="grid h-40 grid-cols-2 place-content-center gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-content-end</h5>
            <div class="grid h-40 grid-cols-2 place-content-end gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-content-between</h5>
            <div class="grid h-40 grid-cols-2 place-content-between gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-content-around</h5>
            <div class="grid h-48 grid-cols-2 place-content-around gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-content-evenly</h5>
            <div class="grid h-48 grid-cols-2 place-content-evenly gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-content-stretch</h5>
            <div class="grid h-48 grid-cols-2 place-content-stretch gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Place Items -->
      <div>
        <h1>Place Items</h1>
        <h2>control how items are justified and aligned at the same time</h2>
        <h3 class="font-mono">place-items-{p}</h3>
        <h4 class="font-mono">start|center|end|stretch</h4>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h5 class="font-mono">place-items-start</h5>
            <div class="grid h-48 grid-cols-3 place-items-start gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div class="border-2 border-green-500 p-2">
            <h5 class="font-mono">place-items-center</h5>
            <div class="grid h-48 grid-cols-3 place-items-center gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-items-end</h5>
            <div class="grid h-48 grid-cols-3 place-items-end gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-items-stretch</h5>
            <div class="grid h-48 grid-cols-3 place-items-stretch gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Place Self -->
      <div>
        <h1>Place Self</h1>
        <h2>control how an individual item is justified and aligned at the same time</h2>
        <h3 class="font-mono">place-self-{p}</h3>
        <h4 class="font-mono">start|center|end|stretch|auto</h4>

        <div class="grid-col-1 grid gap-3 py-3">
          <div>
            <h5 class="font-mono">place-self-start</h5>
            <div class="grid h-48 grid-cols-3 gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="place-self-start border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div class="border-2 border-green-500 p-2">
            <h5 class="font-mono">place-self-center</h5>
            <div class="grid h-48 grid-cols-3 gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="place-self-center border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-self-end</h5>
            <div class="grid h-48 grid-cols-3 gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="place-self-end border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-self-stretch</h5>
            <div class="grid h-48 grid-cols-3 gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="place-self-stretch border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>

          <div>
            <h5 class="font-mono">place-self-auto</h5>
            <div class="grid h-48 grid-cols-3 gap-2 border-2 border-pink-500">
              <div class="border-2 border-indigo-500 p-2">File</div>
              <div class="place-self-auto border-2 border-indigo-500 p-2">Edit</div>
              <div class="border-2 border-indigo-500 p-2">View</div>
              <div class="border-2 border-indigo-500 p-2">Mode</div>
              <div class="border-2 border-indigo-500 p-2">Work</div>
              <div class="border-2 border-indigo-500 p-2">Help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
