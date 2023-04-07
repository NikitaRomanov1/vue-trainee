<template>
  <div class="input">
    <label v-if="label" class="input__label">{{ label }}</label>
    <input
      v-bind="$attrs"
      @input="handleInput"
      :value="modelValue"
      class="input__field"
    />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    label: {
      default: "",
      type: String,
    },
    modelValue: {
      default: "",
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="css" scoped>
@import "./MyInput.css";
</style>
