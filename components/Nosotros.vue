<template>
  <section class="nosotros relative">
    <img class="absolute top-0 w-screen" src="@/assets/imgs/up.png" alt="" />
    <img
      class="absolute bottom-0 w-screen"
      src="@/assets/imgs/down.png"
      alt=""
    />
    <div
      class="
        flex flex-col
        h-screen
        justify-center
        items-center
        lg:items-start
        pl-0
        lg:pl-20
        pt-60
        lg:pt-10
      "
    >
      <h1 class="title mb-10">¿Quiénes Somos?</h1>
      <div class="nosotros__contenedor">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <p class="text">
                En F&G Abogados Fiscalistas tenemos como objetivo principal la
                obtención en favor de nuestros clientes, de los resultados más
                óptimos y siempre favorables en materia fiscal, que les permitan
                la continuidad de sus actividades comerciales sin que éstas se
                vean entorpecidas por la falta de flujo de efectivo, o por el
                excesivo pago de contribuciones derivado de las facultades
                ejercidas por las autoridades, que en la mayoría de las
                ocasiones son arbitrarias y violatorias de los derechos de los
                contribuyentes.
              </p>
            </div>
            <div class="swiper-slide">
              <p class="text">
                Somos un despacho de abogados especializados en la materia
                fiscal con más de veinte años de experiencia; y hemos litigado
                diversidad de asuntos tanto para empresas nacionales como
                transnacionales con distintos objetos sociales, así como
                personas físicas con diversas actividades.
              </p>
            </div>
            <div class="swiper-slide">
              <p class="text">
                En F&G Abogados Fiscalistas contamos con la más amplia
                experiencia en el litigio de más de 850 casos con un porcentaje
                de éxito del 98%, lo que genera en nuestros clientes la
                seguridad de que la atención de su asunto será desempeñada bajo
                la más estricta responsabilidad y seriedad, a fin de obtener el
                resultado deseado y por el cual se han contratado los servicios
                de nuestro despacho, ya que los abogados que lo conformamos
                llevaremos al límite nuestros conocimientos en la materia con el
                objetivo de poder dar siempre el resultado más favorable.
              </p>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  mounted() {
    this.slider()
  },
  methods: {
    slider() {
      const swiper = new Swiper('.swiper-container', {
        effect: 'slide',
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      })
      return swiper
    },
  },
}
</script>
<style lang="scss">
.nosotros {
  background-image: url('@/assets/imgs/Fondo2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @include screen(mobile-xs) {
    height: 152vh;
  }
  @include screen(desktop) {
    height: 100vh;
  }

  .swiper-container {
    @include screen(mobile-xs) {
      width: 309px;
      height: 110%;
    }

    @include screen(desktop) {
      width: 542px;
      height: 40vh;
    }
  }
  .swiper-pagination-bullet {
    background-color: white;
    border: 1px solid white !important;
    opacity: 1 !important;
    height: 10px;
    width: 10px;
    @include screen(tablet) {
      height: 13px;
      width: 13px;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: black;
    border: 1px solid white !important;
  }
}
</style>
