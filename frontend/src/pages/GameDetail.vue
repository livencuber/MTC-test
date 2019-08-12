<template>
  <div>
    <h1>{{id}}</h1>
    <div class="game-detail">
      <div class="game-detail__header">
        <div class="game-detail__image">
        </div>
        <h1 class="card-title">{{id}}</h1>
        <p>desrp</p>
      </div>

      <div class="game-detail__body">
        <p>
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from '@/components/Games/GameCard.vue';

export default {
  props: ['id'],
  components: {
    GameCard,
  },
};
</script>

<style scoped lang="scss">
  @import "~@/styles/variables.scss";

  .game-detail {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;

    &__header {
      display: flex;
    }

    &__image {
      width: 300px;
      min-height: 300px;
      background: url("~@/assets/default-game.png");
      background-size: cover;
    }

    &__body {
      padding: 12px;
    }

    @media (max-width: $breakpoint-mobile) {
      flex-direction: column;
    }

  }
</style>
