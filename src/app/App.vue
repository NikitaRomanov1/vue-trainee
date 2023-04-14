<template>
  <MyHeader @getElements="(e) => getElements(e)" />
  <MyRadioGroup :items="radioItems" v-model="radioItem" class="radio-items" />
  <MyGallery :images="images" />
</template>

<script>
import { MyRadioGroup } from "@/UI";
import { MyHeader, MyGallery } from "../components";
import { apiNames } from "../types";
import { useApiImagesStore } from "@/store/apiImages";
import { ref, computed, watch } from "vue";

export default {
  name: "App",
  components: { MyHeader, MyRadioGroup, MyGallery },

  setup() {
    const radioItem = ref(apiNames.picsum);
    const images = ref([]);
    const apiImages = useApiImagesStore();
    const radioItems = computed(() => [
      { id: 0, name: "Picsum", value: apiNames.picsum },
      { id: 1, name: "Rick and Morty", value: apiNames.rick },
      { id: 2, name: "Pokemons", value: apiNames.pokemon },
    ]);

    const getElements = async (e) => {
      images.value = await apiImages.getNewCharacters(radioItem.value, e);
    };

    watch(
      () => radioItem.value,
      async (newValue) => {
        images.value = await apiImages.getNewCharacters(newValue);
      }
    );

    return { radioItem, images, radioItems, getElements };
  },
};
</script>

<style scoped>
@import "./App.css";
</style>
