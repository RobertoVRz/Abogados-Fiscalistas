<template>
  <div class="marquee__container py-2 text-red">
    <span class="marquee__inner flex">
      <div class="slider--white flex justify-center items-center">
        <p>Joyeras</p>
      </div>
      <div class="slider--black flex justify-center items-center">
        <p>Seguridad Privada</p>
      </div>
      <div class="slider--white flex justify-center items-center">
        <p>Distribuidaoras de bebidas</p>
      </div>
      <div class="slider--black flex justify-center items-center">
        <p>Productoras</p>
      </div>
      <div class="slider--white flex justify-center items-center">
        <p>Exportadoras</p>
      </div>
      <div class="slider--black flex justify-center items-center">
        <p>Comercializadoras</p>
      </div>
      <div class="slider--white flex justify-center items-center">
        <p>Ingenios y cañeras</p>
      </div>
    </span>
  </div>
</template>
<script>
export default {}
</script>
<style lang="postcss" scoped>
.slider--black {
  background-color: black;
  border: 1px solid white;
  color: white;
  padding-inline: 5rem;
  margin-right: 5rem;
}
.slider--white {
  background-color: white;
  border: 1px solid white;
  color: black;
  padding-inline: 5rem;
  margin-right: 5rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
}

.marquee__container {
  overflow: hidden;
  position: relative;
  height: 90px;
  width: 90vw;
}
.marquee__inner {
  height: 45px;
  margin: 0;
  text-align: center;
  position: absolute;
  white-space: nowrap;
  -moz-animation: scroll-left 40s linear infinite;
  -webkit-animation: scroll-left 40s linear infinite;
  animation: scroll-left 40s linear infinite;
}

@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}

@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>
