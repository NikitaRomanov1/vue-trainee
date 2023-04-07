<template>
  <MyHeader @getElements="(e) => getElements(e)" />
  <MyRadioGroup :items="radioItems" v-model="radioItem" class="radio-items" />
  <!-- <Gallery/> -->
</template>

<script>
import { MyRadioGroup } from "@/UI";
import MyHeader from "../components/MyHeader";
import { apiNames } from "../types";
import getNewCharacters from "../api/getNewCharacters";
export default {
  name: "App",
  components: { MyHeader, MyRadioGroup },
  data() {
    return {
      radioItem: apiNames.picsum,
    };
  },
  computed: {
    radioItems() {
      return [
        { id: 0, name: "Picsum", value: apiNames.picsum },
        { id: 1, name: "Rick and Morty", value: apiNames.rick },
        { id: 2, name: "Pokemons", value: apiNames.pokemon },
      ];
    },
  },
  methods: {
    getElements(e) {
      console.log(e);
    },
  },
  watch: {
    radioItem: {
      immediate: true,
      async handler(value) {
        getNewCharacters(value);
      },
    },
  },
};
</script>

<style scoped>
@import "./App.css";
</style>
