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
    <img class="cursor-pointer h-8" src="@/assets/imgs/icons/Vector.png" alt="" />
    <div class="navbar__menu text-white hidden lg:flex">
      <a class="mr-16" href="#nosotros" v-smooth-scroll>Nosotros</a>
      <a class="mr-16" href="#experiencia" v-smooth-scroll>Experiencia</a>
      <a class="mr-16" href="#clientes" v-smooth-scroll>Clientes</a>
      <a class="mr-16" href="#contacto" v-smooth-scroll>Contacto</a>
    </div>
    <div class="flex">
      <a
        href="https://www.facebook.com/FG-Abogados-Fiscalistas-365687210515359"
        target="_blank"
      >
        <img class="mr-5" src="@/assets/imgs/icons/face-w.svg" alt="" />
      </a>
      <a
        href="https://www.instagram.com/fgabogadosfiscalistas/"
        target="_blank"
      >
        <img src="@/assets/imgs/icons/insta-w.svg" alt="" />
      </a>
    </div>
  </div>
</template>
<style lang="scss">
.navbar {
  &__menu {
    font-family: 'Montserrat', sans-serif;
  }
}
</style>
