<template>
  <page-default></page-default>
</template>

<script>
import pageDefault from "./components/pageDefault/pageDefault.vue";

export default {
  name: "App",
  components: {
    pageDefault,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

