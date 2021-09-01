<template>
  <div class="index">
    <hero />
    <nosotros />
    <servicios />
    <clientes />
    <contacto />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
  mounted() {
    AOS.init()
  },
  components: { Hero },
}
</script>
<style lang="scss">
.index {
  overflow-x: hidden;
}
</style>
