<template>
  <v-list color="transparent">
    <template v-for="(item, i) in compItems">
      <template v-if="item=='divider'">
        <v-divider :key="i" />
      </template>
      <template v-else>
        <v-list-item :key="i" :to="item.to" @click="item.click" router exact>
          <v-list-item-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    compItems() {
      return this.items.map(item => {
        return {
          to: null,
          title: '',
          icon: false,
          click: () => {},
          ...item
        };
      });
    },
  },
};
</script>