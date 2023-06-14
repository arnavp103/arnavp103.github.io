<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="p-12 border-gray-500 border">
      <nav class="grid grid-cols-12 ">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.router-link-exact-active {
  color: #000;
  text-decoration: underline;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
</style>