export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Abogados Fiscalistas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#000000' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.fgabogadosfiscalistas.com/',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'FG | Abogados Fiscalistas',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'FG | Abogados Fiscalistas',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Somos un despacho de abogados especializados en la materia fiscal con más de veinte años de experiencia.',
      },
    ],

    script: [
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  styleResources: {
    scss: ['@/assets/sass/app.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/plugins.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      background_color: '#000000'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
