// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/app.css',
  ],
  
  modules: [
    ['@invictus.codes/nuxt-vuetify', {
      vuetifyOptions: {},
      moduleOptions: {
        treeshaking: true,
        // useIconCDN: true | false,
        /* vite-plugin-vuetify options */
        // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
        autoImport: true,
      },
    }],
  ],
})
