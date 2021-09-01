<template>
  <section class="servicios relative py-3" id="experiencia">
    <img class="absolute top-0 w-screen" src="@/assets/imgs/up.png" alt="" />
    <img
      class="absolute bottom-0 w-screen"
      src="@/assets/imgs/down.png"
      alt=""
    />

    <div class="h-screen" data-aos="fade-up" data-aos-delay="1000">
      <h1 class="title text-center pt-10 lg:pt-20 lg:-mb-40 z-10">
        Contamos con experiencia en:
      </h1>

      <div class="h-full flex lg:hidden flex-col justify-center items-center">
        <div class="w-screen text-center h-40">
          <h1 class="servicios__slides-mobile text-white">
            Instauración de juicios de nulidad
          </h1>
        </div>
        <div class="w-screen text-center h-40">
          <h1 class="servicios__slides-mobile text-white">
            Instauración de juicios de nulidad
          </h1>
        </div>
        <div class="text-center h-40">
          <h1 class="servicios__slides-mobile text-white">
            Instauración de juicios de nulidad
          </h1>
        </div>
      </div>

      <div class="servicios__container text-white hidden lg:flex">
        <div
          class="
            servicios__slides
            flex flex-col
            justify-center
            items-center
            px-5
            z-10
          "
          :class="this.slide == 1 ? 'servicios--black' : ''"
          @mouseover="display(1)"
        >
          <h1 class="bg-black">Instauración de juicios de nulidad</h1>
          <p
            class="servicios__text text text-left mb-20"
            v-show="this.slide == 1"
          >
            -Determinación de créditos fiscales por parte del SAT, IMSS,
            INFONAVIT, Secretaría de Finanzas de cualquier Estado, etcétera,
            resultado del ejercicio de sus facultades de comprobación tales como
            auditorías físicas y electrónicas, revisiones de escritorio,
            revisiones de dictamen, entre otras.<br /><br />
            - Negativas de devolución de impuestos o aportaciones de seguridad
            social derivados de saldos a favor por parte del SAT, IMSS,
            INFONAVIT, etcétera.<br /><br />
            - Determinación de créditos fiscales en materia de comercio exterior
            derivados del Procedimiento Administrativo en Materia Aduanera.<br /><br />
            - Sanción o inhabilitación de contadores públicos dictaminadores por
            errores o inconsistencias en los dictámenes presentados.<br /><br />
            - Defensa a empresas que hayan participado en licitaciones y la obra
            o servicio licitado se le haya asignado a otro participante con
            menor posibilidad de adjudicación.<br /><br />
          </p>
        </div>
        <div
          class="
            servicios__slides
            flex flex-col
            justify-center
            items-center
            px-5
          "
          :class="this.slide == 2 ? 'servicios--black' : ''"
          @mouseover="display(2)"
        >
          <h1 class="bg-black">
            Instauración de juicios de amparo indirecto en materia fiscal
          </h1>
          <p class="servicios__text text text-left" v-show="this.slide == 2">
            Seguimiento de éstos ante un Juzgado de Distrito, que incluye la
            promoción de diversos recursos e incidentes hasta su total
            conclusión en cualquier parte de la República Mexicana, derivado de:
            <br /><br />
            - Leyes o Reglamentos que violenten los derechos reconocidos en la
            Constitución Política de los Estados Unidos Mexicanos. <br /><br />
            - Congelamiento o aseguramiento precautorio de cuentas bancarias.
            <br /><br />
            - Auditorías físicas y electrónicas, revisiones de escritorio o
            revisiones de dictámenes que sean violatorias de la Constitución
            Política de los Estados Unidos Mexicanos. <br /><br />
          </p>
        </div>
        <div
          class="
            servicios__slides
            flex flex-col
            justify-center
            items-center
            px-5
          "
          :class="this.slide == 3 ? 'servicios--black' : ''"
          @mouseover="display(3)"
        >
          <h1 class="bg-black">Defensa en procesos penales federales</h1>
          <p class="servicios__text text text-left" v-show="this.slide == 3">
            Seguimiento de éstos ante un Juzgado de Distrito, que incluye la
            promoción de diversos recursos e incidentes hasta su total
            conclusión en cualquier parte de la República Mexicana, derivado de:
            <br /><br />
            - Leyes o Reglamentos que violenten los derechos reconocidos en la
            Constitución Política de los Estados Unidos Mexicanos. <br /><br />
            - Congelamiento o aseguramiento precautorio de cuentas bancarias.
            <br /><br />
            - Auditorías físicas y electrónicas, revisiones de escritorio o
            revisiones de dictámenes que sean violatorias de la Constitución
            Política de los Estados Unidos Mexicanos. <br /><br />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
   mounted() {
    AOS.init()
  },
  data() {
    return {
      slide: '',
    }
  },
  methods: {
    display(slide) {
      this.slide = slide
    },
  },
}
</script>
<style lang="scss">
.servicios {
  background-image: url('@/assets/imgs/Fondo3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  &__slides {
    font-family: 'Cormorant', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.15em;
    width: 33.9vw;
    height: 100%;
    border-right: 1px solid black;
  }
  &__slides-mobile {
    font-family: 'Cormorant', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.15em;
  }
  &__container {
    height: 100%;
  }
  &__text {
    font-size: 15px !important;
    line-height: 25px !important;
    margin-top: 3rem;
    font-family: 'Monstserrat', sans-serif !important;
    font-weight: 200 !important;
    font-style: normal !important;
  }
  &--black {
    background-color: rgba(0, 0, 0, 0.5);
    //filter: blur(5px);
  }
}
</style>
