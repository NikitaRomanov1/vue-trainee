<template>
  <MyHeader @getElements="(e) => getElements(e)" />
  <MyRadioGroup :items="radioItems" v-model="radioItem" class="radio-items" />
  <MyGallery :images="images" />
</template>

<script>
import { MyRadioGroup } from "@/UI";
import { MyHeader, MyGallery } from "../components";
import { apiNames } from "../types";
import getNewCharacters from "../api/getNewCharacters";
export default {
  name: "App",
  components: { MyHeader, MyRadioGroup, MyGallery },
  data() {
    return {
      radioItem: apiNames.picsum,
      images: [],
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
    async getElements(e) {
      this.images = await getNewCharacters(this.radioItem, e);
    },
  },
  watch: {
    radioItem: {
      immediate: true,
      async handler(value) {
        this.images = await getNewCharacters(value);
      },
    },
  },
};
</script>

<style scoped>
@import "./App.css";
</style>
