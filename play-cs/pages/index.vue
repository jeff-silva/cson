<template>
  <div>
    <app-search>
      <template #filter>
        <v-combobox
          :items="options.countries"
          label="Países"
          multiple
          chips
        />
        <v-combobox
          :items="options.modes"
          label="Game modes"
          multiple
          chips
        />
      </template>
      <template #results>
        <v-data-table
          :headers="[
            {sortable:false, text:'Rating/Perks'},
            {sortable:false, text:'Server'},
            {sortable:false, text:'Players by filter'},
            {sortable:false, text:'Map'},
          ]"
          :items="[]"
          :items-per-page="5"
        ></v-data-table>
      </template>
    </app-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        countries: [
          {value:'ru', text:'Russia'},
          {value:'sg', text:'Asia'},
          {value:'br', text:'Brasil'},
          {value:'de', text:'Germany'},
          {value:'tr', text:'Turkey'},
          {value:'ny', text:'USA (NYC)'},
          {value:'sf', text:'USA (SF)'},
        ],
        modes: [
          {value:'cs', text:'Hostage Rescue'},
          {value:'de', text:'Bomb/Defuse'},
          {value:'fy', text:'Fight/Yard'},
          {value:'awp', text:'AWP/Sniper'},
          {value:'scout', text:'Scout/Sniper'},
          {value:'35hp', text:'35HP'},
          {value:'aim', text:'AIM'},
          {value:'gg', text:'Gun Game'},
          {value:'dr', text:'Death Run'},
          {value:'ffa', text:'FFA'},
          {value:'hns', text:'Hide and Seek'},
          {value:'lobby', text:'Lobby'},
          {value:'training', text:'Training'},
          {value:'as', text:'Escort a VIP'},
          {value:'he', text:'Grenades'},
          {value:'surf', text:'Surf'},
          {value:'bhop', text:'BHOP'},
        ],
      },
    };
  },
}
</script>
