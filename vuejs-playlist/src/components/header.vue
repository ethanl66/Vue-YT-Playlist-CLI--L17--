<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {},
  methods: {
    changeTitle: function() {
      this.title = "Vue Wizards Bus"; //need to change this directly because we are not listening to the event here
      bus.$emit("changeTitleBus", "Vue Wizards Bus");
    },
  },
};
</script>

<!--styles only apply to this component-->
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
