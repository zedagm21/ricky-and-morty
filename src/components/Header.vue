<template>
  <div class="bg-white shadow-lg h-24 rounded-lg">
    <header class="flex items-center justify-between px-6 h-full">
      <div class="flex items-center">
        <div class="bg-orange-400 text-black text-4xl rounded-lg p-2 mr-4 font-bold font-serif">
          <p>R&M</p>
        </div>
        <ul class="flex text-center justify-end">
          <RouterLink
            to="/"
            exact-active-class="border-2 border-white rounded-lg text-orange-400 font-bold"
            class="mx-5"
          >
            <li class="list-none">Home</li>
          </RouterLink>
          <RouterLink
            to="/episode"
            active-class="border-2 border-white rounded-lg text-orange-400 font-bold"
            class="mx-5"
          >
            <li class="list-none">Episode</li>
          </RouterLink>
          <RouterLink
            to="/character"
            active-class="border-2 border-white rounded-lg text-orange-400 font-bold"
            class="mx-5"
          >
            <li class="list-none">Character</li>
          </RouterLink>
          <RouterLink
            to="/location"
            active-class="border-2 border-white rounded-lg text-orange-400 font-bold"
            class="mx-8"
          >
            <li class="list-none">Location</li>
          </RouterLink>
        </ul>
      </div>
    </header>
  </div>
</template>
