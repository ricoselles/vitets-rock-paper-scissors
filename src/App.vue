<script setup lang="ts">
import { ref } from 'vue';
import Register from './components/Register.vue';
import Start from './components/Start.vue';
import Play from './components/Play.vue';
import Title from './components/Title.vue';
import Players from './components/Players.vue';

const playerId: string = ref(null);
const gameId: string = ref(null);

const onRegistered = (id: string) => {
  playerId.value = id;
};

const onStarted = (id: string) => {
  gameId.value = id;
};

const onPlayed = () => {};

const onReset = () => {
  gameId.value = null;
};
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
    <Title> Step 1. Register </Title>

    <Register @registered="onRegistered" />

    <Title> Step 2. Start Game </Title>

    <Start :player-id="playerId" @started="onStarted" />

    <Title> Step 3. Play Game </Title>

    <Play
      :playerId="playerId"
      :gameId="gameId"
      @played="onPlayed"
      @reset="onReset"
    />

    <Title> Currently Playing </Title>

    <Players />
  </div>
</template>
