<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import appHeader from '@/components/header'

export default {
  name: 'DefaultLayout',
  components: { appHeader }
}
</script>

<style>
body {
  margin: 0 !important;
}
</style>
