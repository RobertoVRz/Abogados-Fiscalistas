<template>
  <div
    class="
      navbar
      h-14
      px-10
      w-screen
      bg-black
      fixed
      z-20
      flex
      justify-between
      items-center
    "
  >
    <img class="cursor-pointer" src="@/assets/imgs/icons/logo.svg" alt="" />
    <div class="navbar__menu text-white hidden lg:flex">
      <a class="mr-16" href="#nosotros">Nosotros</a>
      <a class="mr-16" href="#experiencia">Experiencia</a>
      <a class="mr-16" href="#clientes">Clientes</a>
      <a class="mr-16" href="#contacto">Contacto</a>
    </div>
    <div class="flex">
      <img class="mr-5" src="@/assets/imgs/icons/face-w.svg" alt="" />
      <img src="@/assets/imgs/icons/insta-w.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss">
.navbar{
  &__menu{
    font-family: 'Montserrat', sans-serif;
  }
}
</style>
