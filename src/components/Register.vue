<script setup lang="ts">
import { ref } from 'vue';

const name = ref(null);

async function submit() {
  try {
    const response = await fetch(
      'https://apim-netivity-trendwatch-prod-euwe.azure-api.net/RegisterPlayer',
      {
        method: 'POST',
        body: JSON.stringify({ name: name.value }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <form class="max-w-md w-full space-y-8" @submit="submit">
    <div>
      <label class="block text-left text-sm font-bold text-gray-700"
        >Name</label
      >
      <input
        v-model="name"
        class="
          mt-1
          focus:ring-indigo-500 focus:border-indigo-500
          block
          w-full
          shadow-sm
          border border-gray-300
          rounded-md
          px-4
          py-2
        "
      />
    </div>

    <button
      type="submit"
      class="
        group
        relative
        w-full
        flex
        justify-center
        py-4
        px-8
        border border-transparent
        text-base
        font-medium
        rounded-md
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      Register
    </button>
  </form>
</template>
