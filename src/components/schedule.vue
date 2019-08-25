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
import axios from "axios";
import Day from "../layouts/day.vue";
export default {
  components: {
    Day
  },
  data() {
    return {
      items: []
    };
  },
  created() {
    this.items = [
      { date: "06/09", schedule: [] },
      { date: "07/09", schedule: [] },
      { date: "08/09", schedule: [] },
      { date: "09/09", schedule: [] },
      { date: "10/09", schedule: [] },
      { date: "11/09", schedule: [] },
      { date: "12/09", schedule: [] },
      { date: "13/09", schedule: [] }
    ];
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://conf.kde.org/en/Akademy2019/public/schedule.json")
        .then(response => {
          let array = response.data.schedule.conference;
          let data = array.days[0].rooms["U4-08"];
          let schedule = data.concat(array.days[0].rooms["U4-01"]);
          this.items[0]["schedule"] = this.prepareData(schedule);

          data = array.days[1].rooms["U4-08"];
          schedule = data.concat(array.days[1].rooms["U4-01"]);
          this.items[1]["schedule"] = this.prepareData(schedule);
        })
        .catch(error => {
          console.log(error);
        });
    },
    prepareData(data) {
      let array = data.map(function(speaker) {
        return {
          name: speaker.persons[0] ? speaker.persons[0].public_name : "",
          talk_name: speaker.title,
          talk_time: speaker.start,
          talk_room: speaker.room,
          talk_description: speaker.description,
          talk_abstract: speaker.abstract
        };
      });
      let result = this.sortByKey(array, "talk_time");
      return result;
    },
    sortByKey(array, key) {
      return array.sort(function(a, b) {
        let x = a[key];
        let y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
  }
};
</script>