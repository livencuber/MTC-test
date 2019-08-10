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
body {
  margin: 0;
}

.container {
  padding: 70px 30px;
  max-width: 1280px;
  margin: auto;
}
</style>
