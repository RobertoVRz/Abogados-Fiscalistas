<template>
  <section class="contacto bg-white flex flex-col lg:flex-row flex-wrap">
    <div class="contacto__datos">
      <h1 class="contacto__title title">Contacto</h1>
    </div>
    <div class="contacto__mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.7822515180746!2d-96.94761778460608!3d18.89673878719098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4e514641e669b%3A0x2705e26bbf9fd212!2sAv%2011%202001-Int%20301%2C%20San%20Jose%2C%2094560%20C%C3%B3rdoba%2C%20Ver.!5e0!3m2!1ses!2smx!4v1629357860551!5m2!1ses!2smx"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>
<style lang="scss">
.contacto {
  @include screen(mobile-xs) {
    height: 100%;
  }

  @include screen(desktop) {
    height: 100vh;
  }
  &__title {
    color: black !important;
  }
  &__datos {
    @include screen(mobile-xs) {
      width: 100vw;
      height: 100%;
    }

    @include screen(desktop) {
      width: 50vw;
      height: 100vh;
    }
  }
  &__mapa {
    @include screen(mobile-xs) {
      width: 100vw;
      height: 60vh;
    }

    @include screen(desktop) {
      width: 50vw;
      height: 100vh;
    }
  }
}
</style>
