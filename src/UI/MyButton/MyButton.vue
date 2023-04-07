<template>
  <button v-bind="$attrs" class="btn primary">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    name: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="css" scoped>
@import "./MyButton.css";
</style>
