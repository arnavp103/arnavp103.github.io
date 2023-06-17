<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full h-1/6 flex flex-col items-center justify-center">
    <div class="px-2 md:px-6 py-4 border-gray-500 border-b w-content">
      <nav class="grid grid-cols-4 md:grid-cols-8 text-xl">
        <RouterLink class="text-center w-fit" to="/">Home</RouterLink>
        <RouterLink class="text-center w-fit" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a:hover,
.router-link-exact-active {
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  text-shadow: #333 0 0 0.05em;
  border-bottom: hsl(192, 100%, 58%) 0.2em solid;
  border-radius: 5%;
}

a {
  transition: all 0.3s ease-in-out;
}

</style>