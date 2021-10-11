<template>
  <section
    class="hero h-screen relative flex flex-col justify-center items-center"
    id="hero"
  >
    <img class="absolute top-0 w-screen" src="@/assets/imgs/up.png" alt="" />
    <img
      class="absolute bottom-0 w-screen"
      src="@/assets/imgs/down.png"
      alt=""
    />
    <img
      class="hero__logo mb-20"
      src="@/assets/imgs/icons/logo.svg"
      alt=""
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-duration="2500s"
    />
    <span
      class="hero__subtitle text-white"
      data-aos="fade-up"
      data-aos-delay="1500"
      data-aos-duration="2500s"
      >Abogados Fiscalistas</span
    >
  </section>
</template>
<script>
export default {
  mounted() {
    //AOS.init()
  },
}
</script>
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
