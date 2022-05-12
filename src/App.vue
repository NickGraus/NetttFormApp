



<template>
  <div id="app"></div>
      <Button btnName="Button" state="secondary"></Button>
  <Button btnName="Button" state="primary"></Button>

</template>

<script>
import Button from "./components/BtnComp.vue";

export default {
  name: "cardComponent",
  components: {
    Button,
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
 #app {
   font-family: "SF Pro Text";
 }
</style>
