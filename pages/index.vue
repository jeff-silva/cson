<template>
  <v-table
    v-bind="{
      hover: true,
    }"
  >
    <colgroup>
      <col width="60px">
      <col width="*">
      <col width="*">
      <col width="*">
      <col width="*">
    </colgroup>
    <thead>
      <tr>
        <th>Rating/Perks</th>
        <th>Server</th>
        <th>Players</th>
        <th>Map</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="s in server.data">
        <td><v-img :src="s.mapThumbnail" width="60" height="40" cover /></td>
        <td>
          <div>{{ s.name }}</div>
          <div>by {{ s.username }}</div>
        </td>
        <td>{{ s.username }}</td>
        <td>{{ s.map }}</td>
        <td>
          <v-btn color="primary" to="/play">Connect</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
  import { ref } from 'vue';
  import useFaker from '@/composables/useFaker';
  const faker = useFaker();

  definePageMeta({
    layout: 'site'
  });

  useHead({
    title: 'Servers',
  });

  const server = ref({
    data: faker.fakeData(25, (item, index) => {
      let r = { index };
      r.name = faker.music.songName();
      r.map = faker.map();
      r.mapThumbnail = faker.mapThumbnail(r.map);
      r.username = faker.internet.userName();
      r.country = faker.address.countryCode('alpha-2');
      r.flag = faker.countryFlag(r.country);
      return r;
    }),
  });
</script>