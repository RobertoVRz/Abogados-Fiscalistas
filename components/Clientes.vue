<template>
  <section class="clientes h-screen relative bg-black" id="clientes">
    <img class="absolute top-0 w-screen" src="@/assets/imgs/up.png" alt="" />
    <img
      class="absolute bottom-0 w-screen"
      src="@/assets/imgs/down.png"
      alt=""
    />
    <div class="h-screen flex flex-col items-center justify-around">
      <h1 class="title text-center" data-aos="fade-up" data-aos-delay="500">
        Parte de nuestros clientes lo contituyen:
      </h1>
      <Slider1 />
      <Slider2 />
      <Slider3 />
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    //AOS.init()
  },
}
</script>
