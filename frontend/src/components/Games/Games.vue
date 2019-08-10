<template>
  <div class="games">
    <GameCard v-bind:key="index" v-for="(game, index) in games" :game="game"/>
  </div>
</template>

<script>
import GameCard from './GameCard';

export default {
  components: {
    GameCard,
  },
  props: ['games'],
};
</script>

<style scoped>
.games {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px ;
}
</style>
