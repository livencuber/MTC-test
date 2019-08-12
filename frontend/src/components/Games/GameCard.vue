<template>
  <div class="game-card" @click="showDetails">
    <div class="game-card__image">
    </div>
    <div class="game-card__body">
      <h3>{{game.name}}</h3>
      <p>{{game.genre}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['game'],

  methods: {
    showDetails() {
      this.$router.push({ name: 'game', params: { id: this.game.id } });
    },
  },
};
</script>

<style scoped lang="scss">
.game-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &__image {
    height: 300px;
    background: url("~@/assets/default-game.png");
    background-size: cover;
 }

  &__body {
    padding: 12px;
  }
}
</style>
