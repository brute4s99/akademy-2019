<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item , i) in items" :key="i">
        <v-expansion-panel-header>{{item.date}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Day :schedule="item.schedule" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Day from "../layouts/day.vue";
export default {
  components: {
    Day
  },
  data() {
    return {
      items: [
        { date: "06/09", schedule: [] },
        { date: "07/09", schedule: [] },
        { date: "08/09", schedule: [] },
        { date: "09/09", schedule: [] },
        { date: "10/09", schedule: [] },
        { date: "11/09", schedule: [] },
        { date: "12/09", schedule: [] },
        { date: "13/09", schedule: [] }
      ]
    };
  }
};
</script>