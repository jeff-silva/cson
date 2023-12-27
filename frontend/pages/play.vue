<template>
  <nuxt-layout name="site">
    <v-theme-provider theme="dark">
      <v-app>
        <div class="border" style="position: fixed; top: 0; left: 0; z-index: 9">
          <v-btn to="/">Back</v-btn>
        </div>

        <div class="d-flex align-center h-100 border">
          <v-img src="/assets/csbg.jpg" alt="" width="100%" cover />
        </div>
      </v-app>
    </v-theme-provider>
  </nuxt-layout>
</template>

<script setup>
useHead({
  title: "Play",
});
</script>
