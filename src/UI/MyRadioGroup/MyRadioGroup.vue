<template>
  <div class="radio-group">
    <div v-for="item in items" :key="item.id">
      <input
        type="radio"
        :value="item.value"
        :checked="item.value === modelValue"
        @change="setValue(item.value)"
      />
      <label v-if="item.name"> {{ item.name }} </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: () => [],
      type: Array,
    },
    modelValue: {
      default: "",
      type: String,
    },
  },
  methods: {
    setValue(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
@import "./MyRadioGroup.css";
</style>
