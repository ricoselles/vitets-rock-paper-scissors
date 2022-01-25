<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Register from './components/Register.vue';
</script>

<template>
  <div
    class="
      min-h-full
      flex flex-col
      items-center
      justify-center
      py-12
      px-4
      space-y-8
    "
  >
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Step 1. Register
    </h2>

    <Register />
  </div>
</template>
