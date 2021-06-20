<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <!-- Passing title as prop-->
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>

    <app-footer v-bind:title="title"></app-footer>
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
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
      title: "Root component title",
    };
  },
};
</script>

<style scoped></style>
