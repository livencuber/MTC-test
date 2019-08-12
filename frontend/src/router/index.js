import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import GameDetail from '@/pages/GameDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: '/games/',
    },
    {
      path: '/games/',
      name: 'games',
      component: Home,
    },
    {
      path: '/games/:id',
      name: 'game',
      props: true,
      component: GameDetail,
    },
    {
      path: '*',
      redirect: '/games',
    },
  ],
});
