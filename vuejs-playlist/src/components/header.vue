<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    /* return {
      title: "Vue Ninjas",
    }; */
  },
  methods: {
    changeTitle: function() {
      this.title = "Vue Wizards"; //primitive types only update in this component
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
