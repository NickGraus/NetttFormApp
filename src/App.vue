<template>
  <div id="app">
    <Topbar title="Titel" state="search" />
    <div class="main">
      <ListItem title="Titel" subtitle="" />
      <CollapseItem />
    </div>
    <Navbar />
  </div>


</template>

<script>
import Navbar from "./components/NavbarComp.vue";
import Topbar from "./components/TopbarComp.vue";
import ListItem from "./components/ListItemComp.vue";
import CollapseItem from "./components/CollapseItemComp.vue";

export default {
  name: "App",
  components: {
    Topbar,
    Navbar,
    ListItem,
    CollapseItem,
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
