<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

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
  <form @submit="submit">
    <label>Name</label>
    <input v-model="name" />
    <button type="submit">Register</button>
  </form>
</template>
