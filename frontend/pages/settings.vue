<template>
  <nuxt-layout name="site">
    <v-defaults-provider
      :defaults="{
        global: {},
      }"
    >
      <div style="max-width: 1000px; margin: 0 auto">
        <div class="settings-title">User information and settings</div>
        <v-text-field v-bind="{ label: 'Nome do jogador', hideDetails: false }" />
        <v-select v-bind="{ label: 'Modelo de faca', hideDetails: false }" />
        <v-select v-bind="{ label: 'Terrorist model', hideDetails: false }" />
        <v-select v-bind="{ label: 'Counter-terrorist model', hideDetails: false }" />

        <div class="settings-title">Game models and sounds</div>
        <v-select v-bind="{ label: 'Modelos de jogadores', hideDetails: false }" />
        <v-select v-bind="{ label: 'Modelos de armas', hideDetails: false }" />
        <v-select v-bind="{ label: 'Sons', hideDetails: false }" />

        <div class="settings-title">Graphics and sound</div>
        <v-select v-bind="{ label: 'Resolution', hideDetails: false }" />
        <v-slider v-bind="{ label: 'Brilho', hideDetails: false }" />
        <v-slider v-bind="{ label: 'Largura da tela', hideDetails: false }" />
        <v-checkbox v-bind="{ label: 'Widescreen', hideDetails: true }" />
        <v-slider v-bind="{ label: 'Volume do som', hideDetails: false }" />
        <v-checkbox v-bind="{ label: 'Som de troca de armas', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Grenade sound alert', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Grenade chat alert', hideDetails: true }" />

        <div class="settings-title">Mouse and crosshair</div>
        <v-slider v-bind="{ label: 'Sensibilidade do mouse', hideDetails: false }" />
        <v-slider v-bind="{ label: 'Sensibilidade do zoom', hideDetails: false }" />
        <v-select v-bind="{ label: 'Tamanho da mira', hideDetails: false }" />
        <v-select v-bind="{ label: 'Cor da mira', hideDetails: false }" />
        <v-checkbox v-bind="{ label: 'Mira translúcida', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Dynamic crosshair', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Mouse invertido', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Salto da roda mouse', hideDetails: true }" />

        <div class="settings-title">Performance</div>
        <v-checkbox v-bind="{ label: 'Network optimization, try to change if game lags', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Desativar seleção de modelo', hideDetails: true }" />

        <div class="settings-title">Game settings</div>
        <v-checkbox v-bind="{ label: 'Marcas de marcador / Mostrar sangue ', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Modo da mão direita', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Mostrar armas nas mãos', hideDetails: true }" />
        <v-slider v-bind="{ label: 'Hands bobs while running', hideDetails: false }" />
        <v-checkbox v-bind="{ label: 'Mudar automaticamente para a arma mais poderosa', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Center players names', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Weather', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Notificações sobre como conectar e desconectar jogadores', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Mostrar bate-papo no jogo', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Show stats on death / end round', hideDetails: true }" />
        <v-checkbox v-bind="{ label: 'Feedback do jogo via código QR', hideDetails: true }" />

        <div class="settings-title">Game settings</div>
        <v-btn to="/controls">Click here to change controls buttons</v-btn>
      </div>

      <v-bottom-navigation>
        <v-btn to="/"> <v-icon>mdi-close</v-icon> Cancel </v-btn>
        <v-btn to="/controls"> <v-icon>mdi-controller</v-icon> Controls </v-btn>
        <v-btn color="success"> <v-icon>mdi-content-save</v-icon> Save </v-btn>
      </v-bottom-navigation>
    </v-defaults-provider>
  </nuxt-layout>
</template>

<script setup>
useHead({
  title: "Settings",
});
</script>

<style>
.settings-title {
  padding: 20px 5px;
  font-size: 20px;
  font-weight: bold;
}
</style>
