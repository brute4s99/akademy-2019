<template>
  <v-app>
    <Welcome />
    <v-content>
      <Schedule />
    </v-content>
  </v-app>
</template>

<script>
import Welcome from "./components/welcome.vue";
import Schedule from "./components/schedule.vue";

export default {
  name: "App",
  components: {
    Welcome,
    Schedule
  },
  data: () => ({
    //
  })
};
</script>
