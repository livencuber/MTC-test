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

<style scoped lang="scss">
  @import '~@/styles/variables.scss';

.games {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  @media (max-width: $breakpoint-desktop) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-mobile) {
    grid-template-columns: 1fr;
  }
}
</style>
