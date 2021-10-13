<template>
  <section class="servicios relative py-3" id="experiencia">
    <img class="absolute top-0 w-screen" src="@/assets/imgs/up.png" alt="" />
    <img
      class="absolute bottom-0 w-screen"
      src="@/assets/imgs/down.png"
      alt=""
    />

    <div class="h-screen" data-aos="fade-up" data-aos-delay="500">
      <h1 class="title text-center block lg:hidden z-10" v-if="this.slide == 0">
        Contamos con experiencia en:
      </h1>
      <h1 class="title text-center hidden lg:block lg:pt-20 lg:-mb-40 z-10">
        Contamos con experiencia en:
      </h1>

      <div class="h-screen mt-10 flex lg:hidden flex-col items-center">
        <div
          class="w-screen text-center mb-5 cursor-pointer"
          :class="this.slide == 1 ? 'servicios--black' : ''"
          v-if="this.slide == 0 || this.slide == 1"
        >
          <div class="servicios__mobileContainer">
            <h1 class="servicios__slides-mobile text-white" @click="display(1)">
              Instauración de juicios de nulidad
            </h1>
            <img
              class="mx-auto"
              src="@/assets/imgs/icons/arrow.svg"
              alt=""
              @click="display(1)"
              v-if="this.slide != 1"
            />
            <p
              class="servicios__text-movile text text-left mb-20 px-5"
              v-if="this.slide == 1"
            >
              -Determinación de créditos fiscales por parte del SAT, IMSS,
              INFONAVIT, Secretaría de Finanzas de cualquier Estado, etcétera,
              resultado del ejercicio de sus facultades de comprobación tales
              como auditorías físicas y electrónicas, revisiones de escritorio,
              revisiones de dictamen, entre otras.<br /><br />
              - Negativas de devolución de impuestos o aportaciones de seguridad
              social derivados de saldos a favor por parte del SAT, IMSS,
              INFONAVIT, etcétera.<br /><br />
              - Determinación de créditos fiscales en materia de comercio
              exterior derivados del Procedimiento Administrativo en Materia
              Aduanera.<br /><br />
              - Sanción o inhabilitación de contadores públicos dictaminadores
              por errores o inconsistencias en los dictámenes presentados.<br /><br />
              - Defensa a empresas que hayan participado en licitaciones y la
              obra o servicio licitado se le haya asignado a otro participante
              con menor posibilidad de adjudicación.<br /><br />
            </p>
            <img
              class="-mt-20 mx-auto"
              src="@/assets/imgs/icons/arrow-up.svg"
              alt=""
              @click="display(0)"
              v-if="this.slide == 1"
            />
          </div>
        </div>
        <div
          class="w-screen text-center mb-5 cursor-pointer"
          :class="this.slide == 2 ? 'servicios--black' : ''"
          v-if="this.slide == 0 || this.slide == 2"
        >
          <div class="servicios__mobileContainer">
            <h1 class="servicios__slides-mobile text-white" @click="display(2)">
              Instauración de juicios de amparo indirecto en materia fiscal
            </h1>
            <img
              class="mx-auto"
              src="@/assets/imgs/icons/arrow.svg"
              alt=""
              @click="display(2)"
              v-if="this.slide != 2"
            />
            <p
              class="servicios__text text text-left mb-20 px-5"
              v-if="this.slide == 2"
            >
              Seguimiento de éstos ante un Juzgado de Distrito, que incluye la
              promoción de diversos recursos e incidentes hasta su total
              conclusión en cualquier parte de la República Mexicana, derivado
              de:
              <br /><br />
              - Leyes o Reglamentos que violenten los derechos reconocidos en la
              Constitución Política de los Estados Unidos Mexicanos.
              <br /><br />
              - Congelamiento o aseguramiento precautorio de cuentas bancarias.
              <br /><br />
              - Auditorías físicas y electrónicas, revisiones de escritorio o
              revisiones de dictámenes que sean violatorias de la Constitución
              Política de los Estados Unidos Mexicanos. <br /><br />
            </p>
            <img
              class="-mt-20 mx-auto"
              src="@/assets/imgs/icons/arrow-up.svg"
              alt=""
              @click="display(0)"
              v-if="this.slide == 2"
            />
          </div>
        </div>
        <div
          class="w-screen text-center mb-5 cursor-pointer"
          :class="this.slide == 3 ? 'servicios--black' : ''"
          v-if="this.slide == 0 || this.slide == 3"
        >
          <div class="servicios__mobileContainer">
            <h1 class="servicios__slides-mobile text-white" @click="display(3)">
              Defensa en procesos penales federales
            </h1>
            <img
              class="mx-auto"
              src="@/assets/imgs/icons/arrow.svg"
              alt=""
              @click="display(3)"
              v-if="this.slide != 3"
            />
            <p
              class="servicios__text text text-left mb-20 px-5"
              v-show="this.slide == 3"
            >
              Derivados de la comisión de delitos fiscales tales como:<br /><br />
              - Defraudación fiscal.<br /><br />
              - Defraudación fiscal equiparable.<br /><br />
              - Contrabando.<br /><br />
              - Contrabando equiparable.<br /><br />
              - Relacionados con el Registro Federal de Contribuyentes.<br /><br />
              - Depositaría Infiel.<br /><br />
              - Operaciones simuladas.<br />
              <br />
              - Otros.
            </p>
            <img
              class="-mt-20 mx-auto"
              src="@/assets/imgs/icons/arrow-up.svg"
              alt=""
              @click="display(0)"
              v-if="this.slide == 3"
            />
          </div>
        </div>
      </div>

      <div
        class="
          servicios__container
          text-white
          hidden
          lg:flex
          justify-around
          items-center
        "
      >
        <h1 class="servicios__slides" v-if="this.slide == 0">
          Instauración de juicios de nulidad <br /><br />
          <span class="servicios__slides-mas cursor-pointer" @click="display(1)"
            >Ver más</span
          >
        </h1>
        <h1 class="servicios__slides" v-if="this.slide == 0">
          Instauración de juicios de amparo indirecto en materia fiscal
          <br /><br />
          <span class="servicios__slides-mas cursor-pointer" @click="display(2)"
            >Ver más</span
          >
        </h1>
        <h1 class="servicios__slides" v-if="this.slide == 0">
          Defensa en procesos penales federales <br /><br />
          <span class="servicios__slides-mas cursor-pointer" @click="display(3)"
            >Ver más</span
          >
        </h1>
        <div
          class="absolute h-screen w-screen servicios--black"
          v-if="this.slide != 0"
        >
          <div
            class="
              h-screen
              w-screen
              flex flex-col
              justify-center
              items-center
              px-40
            "
            v-if="this.slide == 1"
          >
            <div class="flex relative">
              <h1 class="servicios__slides">
                Instauración de juicios de nulidad
              </h1>
              <img
                class="absolute -top-20 -right-40 cursor-pointer"
                @click="display(0)"
                src="@/assets/imgs/icons/close.svg"
                alt=""
              />
            </div>
            <div class="flex items-center">
              <p class="servicios__text text text-left mb-20 px-10">
                -Determinación de créditos fiscales por parte del SAT, IMSS,
                INFONAVIT, Secretaría de Finanzas de cualquier Estado, etcétera,
                resultado del ejercicio de sus facultades de comprobación tales
                como auditorías físicas y electrónicas, revisiones de
                escritorio, revisiones de dictamen, entre otras.<br /><br />
                - Negativas de devolución de impuestos o aportaciones de
                seguridad social derivados de saldos a favor por parte del SAT,
                IMSS, INFONAVIT, etcétera.<br /><br />
                - Determinación de créditos fiscales en materia de comercio
                exterior derivados del Procedimiento Administrativo en Materia
                Aduanera.<br /><br />
                - Sanción o inhabilitación de contadores públicos dictaminadores
                por errores o inconsistencias en los dictámenes presentados.<br /><br />
                - Defensa a empresas que hayan participado en licitaciones y la
                obra o servicio licitado se le haya asignado a otro participante
                con menor posibilidad de adjudicación.<br /><br />
              </p>
              <img
                class="servicios__img"
                src="@/assets/imgs/amparo.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            class="
              h-screen
              w-screen
              flex flex-col
              justify-center
              items-center
              px-80
            "
            v-if="this.slide == 2"
          >
            <div class="flex relative">
              <h1 class="servicios__slides">
                Instauración de juicios de amparo indirecto en materia fiscal
              </h1>
              <img
                class="absolute -top-20 -right-40 cursor-pointer"
                @click="display(0)"
                src="@/assets/imgs/icons/close.svg"
                alt=""
              />
            </div>
            <div class="flex items-center">
              <p class="servicios__text text text-left mb-20 px-10">
                Seguimiento de éstos ante un Juzgado de Distrito, que incluye la
                promoción de diversos recursos e incidentes hasta su total
                conclusión en cualquier parte de la República Mexicana, derivado
                de:
                <br /><br />
                - Leyes o Reglamentos que violenten los derechos reconocidos en
                la Constitución Política de los Estados Unidos Mexicanos.
                <br /><br />
                - Congelamiento o aseguramiento precautorio de cuentas
                bancarias.
                <br /><br />
                - Auditorías físicas y electrónicas, revisiones de escritorio o
                revisiones de dictámenes que sean violatorias de la Constitución
                Política de los Estados Unidos Mexicanos. <br /><br />
              </p>
              <img
                class="servicios__img"
                src="@/assets/imgs/fisco.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            class="
              h-screen
              w-screen
              flex flex-col
              justify-center
              items-center
              px-40
            "
            v-if="this.slide == 3"
          >
            <div class="flex relative">
              <h1 class="servicios__slides">
                Defensa en procesos penales federales
              </h1>
              <img
                class="absolute -top-20 -right-40 cursor-pointer"
                @click="display(0)"
                src="@/assets/imgs/icons/close.svg"
                alt=""
              />
            </div>
            <div class="flex items-center">
              <p class="servicios__text text text-left mb-20">
                Derivados de la comisión de delitos fiscales tales como:<br /><br />
                - Defraudación fiscal.<br /><br />
                - Defraudación fiscal equiparable.<br /><br />
                - Contrabando.<br /><br />
                - Contrabando equiparable.<br /><br />
                - Relacionados con el Registro Federal de Contribuyentes.<br /><br />
                - Depositaría Infiel.<br /><br />
                - Operaciones simuladas.<br />
                <br />
                - Otros.
              </p>
              <img
                class="servicios__img ml-10"
                src="@/assets/imgs/penales.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <!--div
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
          <h1>Instauración de juicios de nulidad</h1>
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
          v-if="this.slide != 2"
          :class="this.slide == 2 ? 'servicios--black' : ''"
          @mouseover="display(2)"
        >
          <h1>Instauración de juicios de amparo indirecto en materia fiscal</h1>
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
          <h1>Defensa en procesos penales federales</h1>
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
        </div-->
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
      slide: 0,
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
  height: 100vh;
  &__mobileContainer {
    max-height: 90vh;
    overflow-y: scroll;
  }
  &__slides {
    font-family: 'Montserrat', sans-serif;
    //font-family: 'Cormorant', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    width: 25rem;
    letter-spacing: 1px;
    line-height: 36px;
    text-align: center;
    &-mas {
      font-size: 24px;
    }
  }
  &__slides-mobile {
    font-family: 'Montserrat', sans-serif;
    //font-family: 'Cormorant', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.15em;
    padding: 0 0.5rem;
  }
  &__img {
    width: 300px;
    margin-right: -3rem;
    margin-top: -5rem;
  }
  &__container {
    height: 100vh;
  }
  &__text-movile {
    font-size: 15px !important;
    line-height: 25px !important;
    margin-top: 3rem;
    font-family: 'Monstserrat', sans-serif !important;
    font-weight: 200 !important;
    font-style: normal !important;
  }
  &__text {
    font-size: 17px !important;
    line-height: 25px !important;
    margin-top: 3rem;
    font-family: 'Monstserrat', sans-serif !important;
    font-weight: 200 !important;
    font-style: normal !important;
  }
  &--black {
    background-color: rgba(0, 0, 0, 1);
    //filter: blur(5px);
  }
}
</style>
