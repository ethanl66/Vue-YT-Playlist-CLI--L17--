<template>
  <div>
    <form-helper>
      <!-- <h2 slot="titleSlot">{{ title }}</h2>
      dynamic slot title
      <p slot="textSlot">I am the paragaph text for the slot</p> -->

      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./components/formhelper.vue";

export default {
  components: {
    "form-helper": formHelper,
  },
  data() {
    return {
      title: "I am a dynamic slot title", //dynamic slot title must be defined in the component that it is being outputted in.
    };
  },
  methods: {},
};
</script>
