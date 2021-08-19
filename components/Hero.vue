<template>
  <section
    class="hero h-screen relative flex flex-col justify-center items-center"
  >
    <img class="absolute top-0 w-screen" src="@/assets/imgs/up.png" alt="" />
    <img
      class="absolute bottom-0 w-screen"
      src="@/assets/imgs/down.png"
      alt=""
    />
    <img class="hero__logo mb-20" src="@/assets/imgs/icons/logo.svg" alt="" />
    <span class="hero__subtitle text-white">Abogados Fiscalistas</span>
  </section>
</template>
<style lang="scss">
.hero {
  background-image: url('@/assets/imgs/Fondo1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &__logo {
    @include screen(mobile-xs) {
      height: 4rem;
    }
    @include screen(desktop) {
      height: 10rem;
    }
  }
  &__subtitle {
    font-family: 'Times';
    font-weight: 400;
    line-height: 72px;
    @include screen(mobile-xs) {
      font-size: 30px;
    }
    @include screen(desktop) {
      font-size: 48px;
    }
  }
}
</style>
