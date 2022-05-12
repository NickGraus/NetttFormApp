



<template>
  <div id="app">
    <Button btnName="Button" state="secondary"></Button>
    <Button btnName="Button" state="primary"></Button>
    <Navbar></Navbar>
  </div>


</template>

<script>
import Button from "./components/BtnComp.vue";
import Navbar from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: {
    Button,
    Navbar,
  },
  data() {
    return {};
  },

  props: {
    title: String,
    description: String,
  },

  methods: {},
};
</script>

<style>


@font-face {
  font-family: "SF Pro Text";
  src: local("SF Pro Text"), url("./fonts/SFProText-Semibold.ttf") format("truetype");
}


body {
  margin: 0;
}
 #app {
   font-family: "SF Pro Text";
 }
</style>
