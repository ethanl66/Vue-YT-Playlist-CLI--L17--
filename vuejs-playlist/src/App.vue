<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
import ninjas from "./components/ninjas.vue";

export default {
  components: {
    "app-header": header, //header is already an HTML tag
    "app-footer": footer,
    "app-ninjas": ninjas,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
