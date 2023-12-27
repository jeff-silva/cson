<template>
  <nuxt-layout name="site">
    <v-table
      v-bind="{
        hover: true,
      }"
    >
      <thead>
        <tr>
          <th>Classificação</th>
          <th>Nível</th>
          <th>Nome</th>
          <th>Matou</th>
          <th>Morreu</th>
          <th>K/D</th>
          <th>Habilidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in user.data">
          <td>{{ u.index }}</td>
          <td>{{ u.level }}</td>
          <td><img :src="u.flag" height="15" class="me-2" /> {{ u.name }}</td>
          <td>{{ u.kills }}</td>
          <td>{{ u.deaths }}</td>
          <td>{{ u.kd }}</td>
          <td>{{ u.hability }}</td>
        </tr>
      </tbody>
    </v-table>

    <v-pagination class="mt-4" :length="4" rounded="circle" />
  </nuxt-layout>
</template>

<script setup>
import { ref } from "vue";
import _ from "lodash";
import { faker } from "@faker-js/faker";

useHead({
  title: "Rating",
});

const user = ref({
  data: _.range(20).map((item, index) => {
    let r = {};
    r.index = index + 1;
    r.level = _.random(90, 100);
    r.name = faker.internet.userName();
    r.country = faker.location.countryCode("alpha-2");
    r.flag = `https://flagcdn.com/w320/${r.country.toLowerCase()}.png`;
    r.kills = _.random(99999, 999999);
    r.deaths = _.random(99999, 999999);
    r.kd = _.random(1, 3, 0.1);
    r.hability = _.random(99999, 999999);
    return r;
  }),
});
</script>
