<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#111"
    >
      <div class="d-flex flex-column" style="height:100vh;">

        <!-- Logged -->
        <v-sheet v-if="!miniVariant && user">
          <div style="font-family:monospace;">
            <div class="pa-4 text-uppercase">{{ user.name }}</div>
            <v-divider />
            <div class="pa-2">
              <v-chip outlined class="mb-2" to="rating/search/41267939e1b88cf2e07604e67e7d43">Rank: {{ user.rank }}</v-chip>
              <v-chip outlined class="mb-2">Skill: {{ user.skill }}</v-chip>
              <v-chip outlined class="mb-2" to="cash">Cash: {{ user.cash }}</v-chip>
              <v-chip outlined class="mb-2" to="gold">Gold: {{ user.gold }}</v-chip>
              <v-chip outlined class="mb-2" to="level">Level: {{ user.level }}</v-chip>
              <v-chip outlined class="mb-2" to="cash">Exp: {{ user.exp }}</v-chip>
            </div>
          </div>
          <v-divider />
          <app-nav :items="[
            {icon: 'mdi-server-network', title: 'My Servers', to:'/servers'},
            {icon: 'mdi-cog-outline', title: 'Settings', to:'/settings'},
            {icon: 'mdi-logout-variant', title: 'Logout', click:() => this.logout()},
          ]" />
        </v-sheet>

        <!-- Unlogged -->
        <v-sheet v-if="!user" class="pa-3">
          <v-btn block color="primary" @click="login(true)">Login</v-btn>
        </v-sheet>

        <v-divider />

        <div class="flex-grow-1" style="overflow:auto;">
          <app-nav :items="[
            {icon:'mdi-server', to:'/', title:'Play'},
            {icon:'mdi-cart', to:'/shop', title:'Shop'},
            {icon:'mdi-cash', to:'/gold', title:'Buy Gold'},
            {icon:'mdi-diamond-stone', to:'/premium', title:'Buy Premium'},
            {icon: 'mdi-currency-usd', title: 'What is Cash and Exp', to:'/cash'},
            {icon: 'mdi-gift-outline', title: 'Free Gold', to:'/offers'},
            {icon: 'mdi-account-group-outline', title: 'Forum', to:'/forum'},
            {icon: 'mdi-credit-card-check-outline', title: 'Rent Servers', to:'/rent'},
            {icon: 'mdi-keyboard-outline', title: 'Controls', to:'/controls'},
            {icon: 'mdi-medical-bag', title: 'FAQ', to:'/faq'},
            {icon: 'mdi-medical-bag', title: 'I Have a Problem', to:'/test'},
            {icon: 'mdi-broadcast', title: 'Rating', to:'/rating'},
            {icon: 'mdi-controller-classic-outline', title: 'Players Online', to:'/players'},
          ]" />
        </div>

        <v-divider />
        <div class="pa-2">
          <div>cstrikeclub0@gmail.com</div>
          <div>Version: 0.1.4#819</div>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      src="https://s2.glbimg.com/nawfuHjDnqjnfZt2_lDv3x5cjuc=/1080x608/top/smart/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/3/D/PIN5ALQTWrN0pYAjO1QA/0000000135.1920x1080.jpg"
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to bottom, #00000099, #000000CC"
        ></v-img>
      </template>

      <template #extension>
        <nuxt-link to="/faq?id=aaa" class="white--text">
          How to place my advert on this website?
        </nuxt-link>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer=!drawer" v-if="$vuetify.breakpoint.mobile" />
      <!-- <v-btn icon @click.stop="miniVariant=!miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped=!clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed=!fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-btn to="/players?online=1" color="primary">
        653 Players online
      </v-btn>

      <!-- <v-btn icon target="_blank" href="https://facebook.com">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn text target="_blank" href="https://discord.gg/HW5XRAp">
        discord
      </v-btn>
      <v-btn text target="_blank" href="https://vk.com/playcscom">
        vk
      </v-btn>
      <v-btn icon target="_blank" href="https://instagram.com/play_cs_com/">
        <v-icon>mdi-instagram</v-icon>
      </v-btn> -->

      <v-spacer />

      <app-btn-drawer
        v-if="user"
        type="menu"
        title="Notifications"
      >
        <template #activator>
          <v-icon>mdi-bell</v-icon>
        </template>

        <div class="pa-4">
          Notifications
        </div>
      </app-btn-drawer>

      <app-btn-drawer
        type="drawer"
        title="Invites"
      >
        <template #activator>
          <v-icon>mdi-email-variant</v-icon>
        </template>

        <div class="pa-4">
          Invites
        </div>
      </app-btn-drawer>

      <app-btn-drawer
        type="menu"
        title="Help"
      >
        <template #activator>
          <v-icon>mdi-help-circle-outline</v-icon>
        </template>

        <app-nav :items="[
          {to:'/faq', title:'FAQ'},
          {to:'/game-modes', title:'Game modes'},
          {to:'/credits', title:'Credits'},
          {to:'/about', title:'About'},
          {to:'/rules', title:'Rules'},
          {to:'/contacts', title:'Contacts'},
        ]" />
      </app-btn-drawer>

      <app-btn-drawer
        type="menu"
        title="Language"
      >
        <template #activator>
          <v-icon>mdi-flag</v-icon>
        </template>

        <app-nav :items="[
          {to:null, title:'English'},
          {to:null, title:'Português'},
        ]" />
      </app-btn-drawer>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed">
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'Play-CS.com',
      user: false,
    };
  },
  methods: {
    async login(modal=false) {
      const { data } = await this.$axios.get('https://randomuser.me/api/?results=1');

      const setUser = () => {
        this.user = {
          name: data.results[0].login.username,
          rank: 17410,
          skill: 302.01,
          cash: 156,
          gold: 0,
          level: 0,
          exp: 19,
        };
      };

      if (modal) {
        let w = window.open("", "MsgWindow", "width=600,height=400");
        w.document.write(`<pre>Connecting to social authentication service</pre>`);

        setTimeout(() => {
          w.close();
          setUser();
        }, 2000);

        return;
      }

      setUser();
    },
    logout() {
      this.user = false;
    },
  },
  mounted() {
    this.login();
  },
}
</script>
