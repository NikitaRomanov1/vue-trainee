<template>
  <div>
    <MyButton
      v-for="button in styleButtons"
      @click="handleClick(button.value)"
      :name="button.name"
      :key="button.value"
      :disabled="button.value === styleType"
    />
  </div>
  <div :class="['gallery', styleType]">
    <figure v-for="image in images" :key="image.id" class="col">
      <img v-if="image.url" :src="image.url" :alt="image.name" />
      <figcaption v-if="image.name">{{ image.name }}</figcaption>
    </figure>
  </div>
</template>

<script>
import { MyButton } from "@/UI";
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      styleType: "flex",
    };
  },
  components: { MyButton },
  computed: {
    styleButtons() {
      return [
        { name: "Флекс", value: "flex" },
        { name: "Гриды", value: "grid" },
      ];
    },
  },
  methods: {
    handleClick(type) {
      this.styleType = type;
    },
  },
};
</script>

<style scoped>
@import "./MyGallery.css";
</style>
