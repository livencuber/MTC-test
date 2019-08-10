<template>
  <div>
    <h1>Игры</h1>
    <Games :games="games"/>
  </div>
</template>

<script>

import { mapState } from 'vuex';

import Games from '@/components/Games/Games.vue';

export default {
  components: {
    Games,
  },

  computed: {
    ...mapState('games', {
      games: state => state.games,
    }),
  },

};
</script>

<style scoped>
</style>
