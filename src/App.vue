<template>
  <div id="app">
    <Topbar title="Titel" state="search" />
    <div class="main">
      <Button btnName="Button" state="secondary"></Button>
      <Button btnName="Button" state="primary"></Button>
      <list-item title="Titel" subtitle="test" />
      <list-item title="Titel" subtitle="test" />
    </div>
    <Navbar />
  </div>


</template>

<script>
import Button from "./components/BtnComp.vue";
import Navbar from "./components/NavbarComp.vue";
import Topbar from "./components/TopbarComp.vue";
import ListItem from "./components/ListItemComp.vue";

export default {
  name: "App",
  components: {
    Topbar,
    Button,
    Navbar,
    ListItem,
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

 .main {
   padding: 16px;
 }
</style>
