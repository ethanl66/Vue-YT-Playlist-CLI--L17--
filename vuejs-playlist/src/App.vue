<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue"; //Import component

export default {
  components: {
    "add-blog": addBlog, //register component
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
