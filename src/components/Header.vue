<template>
  <div class="bg-white shadow-lg h-24 rounded-lg">
    <header class="flex items-center justify-between px-6 h-full">
      <div class="flex items-center">
        <div class="bg-orange-400 text-black text-4xl rounded-lg p-2 mr-4 font-bold font-serif">
          <p>R&M</p>
        </div>
        <ul class="flex text-center justify-end">
          <RouterLink to="/" exact-active-class="active-link" class="mx-5">
            <li>Home</li>
          </RouterLink>
          <RouterLink to="/episode" active-class="active-link" class="mx-5 ">
            <li>Episode</li>
          </RouterLink>
          <RouterLink to="/character" active-class="active-link" class="mx-5">
            <li>Character</li>
          </RouterLink>
          <RouterLink to="/location" active-class="active-link" class="mx-8">
            <li>Location</li>
          </RouterLink>
        </ul>
      </div>
    </header>
  </div>
</template>

<style scoped>
.bg-white {
  background-color: white;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.active-link {
  border: 2px solid white;
  border-radius: 0.75rem; /* Rounded corners */
  color: #f97316; /* Tailwind's orange-400 */
  font-weight: bold;
}


li {
  list-style: none;
}
</style>
