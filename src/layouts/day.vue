<template>
  <v-list>
    <v-list-item-group>
      <v-list-item v-for="(item, i) in schedule" :key="i">
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">{{ item.talk_name }}</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon>person_pin</v-icon>
            {{ item.name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-icon>access_time</v-icon>
            {{ item.talk_time }} |
            <v-icon>meeting_room</v-icon>
            {{ item.talk_room }}
          </v-list-item-subtitle>
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