<template>
  <v-defaults-provider
    :defaults="{
      global: {},
    }"
  >
    <v-theme-provider theme="dark">
      <v-app>
        <v-navigation-drawer
          v-model="menu.drawer"
          v-bind="{
            location: 'start',
          }"
        >
          <div class="d-flex flex-column h-100">
            <v-card>
              <v-card-text>
                <div>Reproduzir no navegador</div>
                <div>PLAY-CS.COM</div>
                <div>Horário do servidor: 14 Apr 05:10</div>
                <div>Game version: 0.1.4#904</div>
              </v-card-text>
              <v-divider />
              <v-card-text>
                <div>USERNAME</div>
                <nuxt-link to="/rating/search/14107abf71bdb0853489663406f193">
                  Classificação: 32404, habilidade: 632.71
                </nuxt-link>
                <br>
                <nuxt-link to="/cash">
                  Cash: 26
                </nuxt-link>
                <nuxt-link to="/gold">
                  Gold: 26
                </nuxt-link>,
                <br>
                <nuxt-link to="/level">
                  Level: 0
                </nuxt-link>,
                <nuxt-link to="/cash">
                  Exp: 26
                </nuxt-link>
                <br><br>
              </v-card-text>
            </v-card>

            <div class="flex-grow-1 overflow-auto">
              <v-list :items="menu.pages"></v-list>
            </div>
          </div>
        </v-navigation-drawer>
    
        <v-main>
          <v-app-bar>
            <template v-slot:prepend>
              <v-app-bar-nav-icon
                class="d-lg-none"
                @click="menu.drawer = !menu.drawer"
              />
            </template>

            <v-app-bar-title>{{ title || 'No title' }}</v-app-bar-title>

            <div class="flex-grow-1">150 Players online</div>

            <template v-slot:append>
              <v-btn
                icon="mdi-dots-vertical"
                class="d-lg-none"
                @click="invite.drawer = !invite.drawer"
              />
            </template>
          </v-app-bar>

          <!-- <pre>{{ display }}</pre> -->

          <v-container>
            <slot />
          </v-container>
    
          <v-navigation-drawer
            v-model="invite.drawer"
            v-bind="{
              location: 'end',
            }"
          >
            <template v-for="i in invite.data">
              <v-card>
                <v-card-title>
                  {{ i.map }}
                </v-card-title>
                <v-card-subtitle class="d-flex align-center" style="gap:10px;">
                  <v-img :src="i.flag" alt="" height="20" />
                  <div class="flex-grow-1">{{ i.username }}</div>
                </v-card-subtitle>
                <v-card-text>
                  <v-img :src="i.thumbnail" alt="" width="100%" />
                  <v-btn block color="primary" rounded="0" to="/play">Play</v-btn>
                </v-card-text>
              </v-card>
            </template>
          </v-navigation-drawer>
        </v-main>
      </v-app>
    </v-theme-provider>
  </v-defaults-provider>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue';
  import _ from 'lodash';

  import useFaker from '@/composables/useFaker';
  const faker = useFaker();

  import { useDisplay } from 'vuetify';
  const display = useDisplay();

  const title = ref('');

  const route = useRoute();

  const getTitle = () => {
    title.value = document.title;
  };

  watch([ route ], ([]) => {
    setTimeout(getTitle, 50);
  });

  onMounted(getTitle);

  const menu = ref({
    drawer: !display.lg,
    pages: [
      {
        title: 'Página principal',
        props: { prependIcon: 'mdi-home', to: '/' }
      },
      {
        title: 'Avaliação',
        props: { prependIcon: 'mdi-star', to: '/rating' }
      },
      {
        title: 'Definições',
        props: { prependIcon: 'mdi-cog', to: '/settings' }
      },
      { type: 'divider' },
      { type: 'subheader', title: 'Compras' },
      {
        title: 'FAQ Cash & Exp',
        props: { prependIcon: 'mdi-frequently-asked-questions', to: '/cash' }
      },
      {
        title: 'Comprar Gold',
        props: { prependIcon: 'mdi-gold', to: '/gold' }
      },
      {
        title: 'Comprar Premium',
        props: { prependIcon: 'mdi-gift', to: '/premium' }
      },
      {
        title: 'Servidor de aluguel',
        props: { prependIcon: 'mdi-server-plus', to: '/rent' }
      },
      {
        title: 'Comprar regalias',
        props: { to: '/shop' }
      },
      { type: 'divider' },
      { type: 'subheader', title: 'Meus servidores' },
      {
        title: 'Meus servidores',
        props: { prependIcon: 'mdi-server', to: '/myservers' }
      },
      {
        title: 'Servidor de aluguel',
        props: { prependIcon: 'mdi-server-plus', to: '/rent' }
      },
      {
        title: 'Original CS 1.6 Client',
        props: { href: 'https://cs-proof.net/', target: '_blank' }
      },
      { type: 'divider' },
      {
        title: 'Contato: cstrikeclub0@gmail.com',
        props: { href: 'mailto:cstrikeclub0@gmail.com' },
      },
      { type: 'divider' },
      {
        title: 'Termos e condições',
        props: { prependIcon: 'mdi-file-sign', to: '/terms' }
      },
      {
        title: 'Política de reembolso',
        props: { prependIcon: 'mdi-cash-refund', to: '/refund' }
      },
      { type: 'divider' },
      { type: 'subheader', title: 'Ajuda' },
      {
        title: 'Perguntas frequentes',
        props: { prependIcon: 'mdi-help', to: '/faq' }
      },
      {
        title: 'Controles',
        props: { prependIcon: 'mdi-controller', to: '/controls' }
      },
      {
        title: 'Descrição de modos',
        props: { prependIcon: 'mdi-book', to: '/gamemodes' }
      },
      {
        title: 'Creditos',
        props: { prependIcon: 'mdi-copyright', to: '/credits' }
      },
      {
        title: 'Sobre o jogo',
        props: { prependIcon: 'mdi-book-open-variant', to: '/about' }
      },
      {
        title: 'Regras',
        props: { prependIcon: 'mdi-information', to: '/rules' }
      },
      {
        title: 'Contatos',
        props: { prependIcon: 'mdi-controller', to: '/contacts' }
      },
      {
        title: 'Free gold',
        props: { prependIcon: 'mdi-gift', to: '/offers' }
      },
      {
        title: 'Jogadores online',
        props: { prependIcon: 'mdi-account-badge', to: '/players-online' }
      },
    ],
  });


  const invite = ref({
    drawer: !display.lg,
    data: _.range(10).map((item, index) => {
      const map =  faker.map();
      const thumbnail = `https://play-cs.com/map_thumb/embed_v2/${map}.jpg`;
      const username = faker.internet.userName();
      const country = faker.address.countryCode('alpha-2');
      const flag = `https://flagcdn.com/w320/${country.toLowerCase()}.png`;
      return { username, map, thumbnail, country, flag };
    }),
  });
</script>