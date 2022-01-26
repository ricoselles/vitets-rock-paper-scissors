<template>
  {{ playerId }}<br />
  {{ gameId }}<br />

  <p>Ronde {{ round }}</p>

  <pre>{{ progress }}</pre>

  <template v-if="!finish">
    <Button type="button" @click="play('rock')" :disabled="!playable"
      >🧗</Button
    >
    <Button type="button" @click="play('paper')" :disabled="!playable"
      >🧻</Button
    >
    <Button type="button" @click="play('scissors')" :disabled="!playable"
      >✂️</Button
    >
  </template>
  <template v-else>
    <p>You won/lose</p>
    <Button type="button" @click="reset">Reset</Button>
  </template>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { useClient } from '../composables/client';
import Button from './Button.vue';

const props = defineProps<{ playerId?: string; gameId?: string }>();
const emits = defineEmits(['played', 'reset']);

const { playerId, gameId } = toRefs(props);

const round = ref(1);
const finish = ref(false);
const progress = ref(null);

const playable = computed(() => playerId.value != null && gameId.value != null);

const play = async (shape) => {
  const response = await useClient().playRound(
    gameId.value,
    playerId.value,
    shape
  );

  progress.value = response;

  if (response?.rounds?.length < 3) {
    round.value++;
  } else {
    finish.value = true;
  }
};

const reset = () => {
  round.value = 1;
  finish.value = false;
  progress.value = null;
  emits('reset');
};
</script>
