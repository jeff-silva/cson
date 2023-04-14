<template>
  <v-defaults-provider
    :defaults="{
      global: {
        hideDetails: false,
      },
    }"
  >
    <div style="max-width:1000px; margin:0 auto;">
      <v-select v-bind="{ label: 'Fogo' }" />
      <v-select v-bind="{ label: 'Ampliação' }" />
      <v-select v-bind="{ label: 'Siga em frente' }" />
      <v-select v-bind="{ label: 'Voltar' }" />
      <v-select v-bind="{ label: 'Mover para esquerda (metralhar)' }" />
      <v-select v-bind="{ label: 'Mover para direita (metralhar)' }" />
      <v-select v-bind="{ label: 'Vire a esquerda' }" />
      <v-select v-bind="{ label: 'Vire a direita' }" />
      <v-select v-bind="{ label: 'Caminhar' }" />
      <v-select v-bind="{ label: 'Saltar' }" />
      <v-select v-bind="{ label: 'Pato (use Ctrl in fullscreen only)' }" />
      <v-select v-bind="{ label: 'Usar' }" />
      <v-select v-bind="{ label: 'Ligar lanterna' }" />
      <v-select v-bind="{ label: 'Recarregar' }" />
      <v-select v-bind="{ label: 'Menu de compra' }" />
      <v-select v-bind="{ label: 'Mudar de time' }" />
      <v-select v-bind="{ label: 'Exibir pontuações' }" />
      <v-select v-bind="{ label: 'Última arma usada' }" />
      <v-select v-bind="{ label: 'Arma anterior, BHOP: Saltar' }" />
      <v-select v-bind="{ label: 'Próxima arma, BHOP: Saltar' }" />
      <v-select v-bind="{ label: 'Soltar arma atual' }" />
      <v-select v-bind="{ label: 'Falar' }" />
      <v-select v-bind="{ label: 'Falar com o time' }" />
      <v-select v-bind="{ label: 'Ligar microfone' }" />
      <v-select v-bind="{ label: 'Logotipo' }" />
      <v-select v-bind="{ label: 'Cancelar seleção' }" />
      <v-select v-bind="{ label: 'Comprar munição 1' }" />
      <v-select v-bind="{ label: 'Comprar munição 2' }" />
      <v-select v-bind="{ label: 'Comprar equipamento' }" />
      <v-select v-bind="{ label: 'inspecionar arma' }" />
      <v-select v-bind="{ label: 'Radio commands' }" />
      <v-select v-bind="{ label: 'Group radio' }" />
      <v-select v-bind="{ label: 'Group responses' }" />
      <v-select v-bind="{ label: 'Slot 1' }" />
      <v-select v-bind="{ label: 'Slot 2' }" />
      <v-select v-bind="{ label: 'Slot 3' }" />
      <v-select v-bind="{ label: 'Slot 4' }" />
      <v-select v-bind="{ label: 'Slot 5' }" />
      <v-select v-bind="{ label: 'Slot 6' }" />
      <v-select v-bind="{ label: 'Slot 7' }" />
      <v-select v-bind="{ label: 'Slot 8' }" />
      <v-select v-bind="{ label: 'Slot 9' }" />
      <v-select v-bind="{ label: 'Slot 10' }" />
      <v-select v-bind="{ label: 'Admin menu' }" />
    </div>

    <v-bottom-navigation>
      <v-btn to="/">
        <v-icon>mdi-close</v-icon> Cancel
      </v-btn>
      <v-btn to="/settings">
        <v-icon>mdi-cog</v-icon> Settings
      </v-btn>
      <v-btn color="success">
        <v-icon>mdi-content-save</v-icon> Save
      </v-btn>
    </v-bottom-navigation>
  </v-defaults-provider>
</template>

<script setup>
  definePageMeta({
    layout: 'site'
  });

  useHead({
    title: 'Controls',
  });
</script>

<style>
  .settings-title {
    padding: 20px 5px;
    font-size: 20px;
    font-weight: bold;
  }
</style>