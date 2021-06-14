<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import ninjas from "./ninjas.vue"; //Register locally

export default {
  components: {
    ninjas: ninjas, //Register locally
  },
  data() {
    return {
      title: "Ninja App",
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
