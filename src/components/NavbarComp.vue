<template>
  <div id="navbar" class="navbar">
    <div class="flexbox">
      <router-link to="/">
        <div class="menu-item"></div>
      </router-link>
      <router-link to="/customers">
        <div class="menu-item"></div>
      </router-link>
    </div>
  </div>
</template>



<script>
export default {
  name: 'navbarComp',
  data() {
    return {
    };
  },

  props: {},

  methods: {}
};
</script>

<style>
.navbar {
  width: 100%;
  background-color: #14213D;
  color: #ffffff;
  padding: 16px 0;
  position: fixed;
  bottom: 0;
}

.flexbox {
  display: flex;
  justify-content: space-evenly;
}

.menu-item {
  height: 24px;
  width: 24px;
  background-color: #ffffff;
  border-radius: 20px;
}

.menu-item:hover, .menu-item:active {
  background-color: #fca311;
}
</style>