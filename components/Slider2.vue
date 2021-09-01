<template>
  <div class="marquee__container py-2 text-red">
    <span class="marquee__inner flex">
      <div class="slider--white flex justify-center items-center">
        <p>Abarroteras</p>
      </div>
      <div class="slider--black flex justify-center items-center">
        <p>Transportistas</p>
      </div>
      <div class="slider--white flex justify-center items-center">
        <p>Hoteleras</p>
      </div>
      <div class="slider--black flex justify-center items-center">
        <p>Refresqueras</p>
      </div>
      <div class="slider--white flex justify-center items-center">
        <p>Cafetaleras</p>
      </div>
      <div class="slider--black flex justify-center items-center">
        <p>Avícolas</p>
      </div>
      <div class="slider--white flex justify-center items-center">
        <p>Agroindustriales</p>
      </div>
    </span>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.slider--black {
  background-color: black;
  border: 1px solid white;
  color: white;
  padding-inline: 5rem;
  margin-right: 5rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
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
  -moz-animation: scroll-right 50s linear infinite;
  -webkit-animation: scroll-right 50s linear infinite;
  animation: scroll-right 50s linear infinite;
}

@-moz-keyframes scroll-right {
  0% {
    -moz-transform: translateX(-100%);
  }
  100% {
    -moz-transform: translateX(100%);
  }
}

@-webkit-keyframes scroll-right {
  0% {
    -webkit-transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
  }
}

@keyframes scroll-right {
  0% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>
