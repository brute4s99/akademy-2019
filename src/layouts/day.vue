<template>
  <v-list>
    <v-list-item-group v-model="schedule">
      <v-list-item v-for="(item, i) in schedule" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  props: ["schedule"]
};
</script>