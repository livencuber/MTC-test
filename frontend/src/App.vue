<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Shared/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>

</style>
