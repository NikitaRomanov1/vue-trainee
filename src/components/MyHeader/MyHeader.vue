<template>
  <div class="header">
    <div class="header__search">
      <MyInput
        v-model="countElements"
        type="number"
        placeholder="Введите кол-во элементов"
      />
      <MyButton @click="handleClick()" name="Найти" />
    </div>
  </div>
</template>

<script>
import { MyButton, MyInput } from "@/UI";

export default {
  name: "MyHeader",
  components: { MyInput, MyButton },
  emits: ["getElements"],
  data() {
    return {
      countElements: null,
    };
  },
  methods: {
    handleClick() {
      this.$emit("getElements", this.countElements);
      this.countElements = null;
    },
  },
};
</script>

<style scoped>
@import "./MyHeader.css";
</style>
