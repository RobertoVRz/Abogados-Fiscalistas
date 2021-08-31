<template>
  <section class="contacto bg-white flex flex-col lg:flex-row flex-wrap">
    <div class="contacto__datos flex flex-col justify-around p-20">
      <h1 class="contacto__title title">Contacto</h1>
      <div class="flex items-center">
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/mail.svg"
          alt=""
        />
        <div class="text_black">
          <a>carflex@gmail.com</a> <br />
          <a>directum.lg@hotmail.com</a> <br />
          <a>hago95@hotmail.com</a> <br />
        </div>
      </div>

      <div class="flex items-center">
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/phone.svg"
          alt=""
        />
        <div class="text_black">
          <a>271 712 2614</a>
        </div>
      </div>

      <div class="flex items-center">
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/whats.svg"
          alt=""
        />
        <div class="text_black">
          <a href="">271 180 1644</a><br />
          <a href="">272 129 2708</a><br />
          <a href="">271 718 2955</a>
        </div>
      </div>

      <div class="flex items-center">
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/insta.svg"
          alt=""
        />
        <div class="text_black">
          <a>@fgabogadosfiscalistas</a>
        </div>
      </div>

      <div class="flex items-center">
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/face.svg"
          alt=""
        />
        <div class="text_black">
          <a>F&G Abogados Fiscalistas</a>
        </div>
      </div>

      <div class="flex items-center">
        <img class="contacto__icons" src="@/assets/imgs/icons/pin.svg" alt="" />
        <div class="text_black">
          <p>Av. 11 #2001, Int 301, Córdoba, Veracruz</p>
        </div>
      </div>
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
  &__icons {
    height: 50px;
    width: 50px;
    padding: 0.2rem;
    margin-right: 1rem;
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
