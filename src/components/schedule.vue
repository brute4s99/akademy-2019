<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item , i) in items" :key="i">
        <v-expansion-panel-header>{{item}}</v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "06/09",
        "07/09",
        "08/09",
        "09/09",
        "10/09",
        "11/09",
        "12/09",
        "13/09"
      ]
    };
  }
};
</script>