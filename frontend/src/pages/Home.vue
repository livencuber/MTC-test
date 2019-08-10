<template>
  <div>
    <h1>Игры</h1>
    <Games :games="games"/>
  </div>
</template>

<script>
import Games from '@/components/Games/Games.vue';

export default {
  components: {
    Games,
  },

  data() {
    return {
      games: [
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
        { name: 'Hearthstone', genre: 'Карточные' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
