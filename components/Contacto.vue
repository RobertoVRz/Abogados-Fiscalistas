<template>
  <section class="contacto bg-white flex flex-col lg:flex-row" id="contacto">
    <div
      class="contacto__datos flex flex-col justify-around p-5 lg:p-20"
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-anchor=".contacto"
    >
      <h1
        class="contacto__title title"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-anchor=".contacto"
      >
        Contacto
      </h1>
      <div
        class="flex items-center mb-5 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-anchor=".contacto"
      >
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/mail.svg"
          alt=""
        />
        <div class="text_black">
          <a href="mailto:carflex@hotmail.com">carflex@hotmail.com</a> <br />
          <a href="mailto:directum.lg@gmail.com">directum.lg@gmail.com</a>
          <br />
          <a href="mailto:hafo95@hotmail.com">hafo95@hotmail.com</a> <br />
        </div>
      </div>

      <div
        class="flex items-center mb-5 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-anchor=".contacto"
      >
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/phone.svg"
          alt=""
        />
        <div class="text_black">
          <a href="tel:+522717122614">271 712 2614</a>
        </div>
      </div>

      <div
        class="flex items-center mb-5 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-anchor=".contacto"
      >
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/whats.svg"
          alt=""
        />
        <div class="text_black w-full flex flex-col">
          <div class="mb-2">
            <span class="font-bold">Lic. Carlos Antonio Flores Rojas - </span>
            <a href="tel:+522711801644">271 180 1644</a>
          </div>
          <div class="mb-2">
            <span class="font-bold">Mtro. Luis Miguel García Rojas - </span>
            <a href="tel:+522721292708">272 129 2708</a>
          </div>
          <div class="mb-2">
            <span class="font-bold">Mtro. Hugo Arturo Flores Olivas - </span>
            <a href="tel:+522717182955">271 718 2955</a>
          </div>
        </div>
      </div>

      <div
        class="flex items-center mb-5 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-anchor=".contacto"
      >
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/insta.svg"
          alt=""
        />
        <div class="text_black">
          <a
            href="https://www.instagram.com/fgabogadosfiscalistas/"
            target="_blank"
            >@fgabogadosfiscalistas</a
          >
        </div>
      </div>

      <div
        class="flex items-center mb-5 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-anchor=".contacto"
      >
        <img
          class="contacto__icons"
          src="@/assets/imgs/icons/face.svg"
          alt=""
        />
        <div class="text_black">
          <a
            href="https://www.facebook.com/FG-Abogados-Fiscalistas-365687210515359"
            target="_blank"
            >F&G Abogados Fiscalistas</a
          >
        </div>
      </div>

      <div
        class="flex items-center mb-5 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-anchor=".contacto"
      >
        <img class="contacto__icons" src="@/assets/imgs/icons/pin.svg" alt="" />
        <div class="text_black">
          <a
            href="https://www.google.com/maps?ll=18.896739,-96.945429&z=17&t=m&hl=es&gl=MX&mapclient=embed&q=Av+11+2001-Int+301+San+Jose+94560+C%C3%B3rdoba,+Ver."
            target="_blank"
            >Av. 11 #2001, Int 301, Córdoba, Veracruz</a
          >
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
<script>
export default {
  mounted() {
    AOS.init()
  },
}
</script>
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
      width: 49vw;
      height: 100vh;
    }
  }
}
</style>
