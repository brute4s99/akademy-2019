<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>
      <v-toolbar-title>Akademy 2019</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600">
      <v-container style="height: 200px;"></v-container>
    </v-sheet>
  </v-card>
</template>