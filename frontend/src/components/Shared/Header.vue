<template>
  <div class="header">
    <div class="header__content">
      <router-link class="header__logo" to="/"><i class="fas fa-gamepad"></i></router-link>
      <button type="button" class="btn">
        Войти
      </button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.header {
  background-color: #f8f9fa;
  height: 60px;
  position: fixed;
  width: 100%;
  top:0;
  left: 0;
  z-index: 1000;

  &__content {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    height: 100%;
    align-items: center;
  }

  &__logo {
    i {
      margin-right: 8px;
      font-size: 30px;
    }
  }

}
</style>
