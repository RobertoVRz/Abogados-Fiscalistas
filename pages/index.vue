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
export default {
  mounted() {
    AOS.init()
  },
}
</script>
<style lang="scss">
.index {
  overflow-x: hidden;
}
</style>
