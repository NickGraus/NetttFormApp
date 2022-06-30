<template>
  <div id="navbar" class="navbar">
    <div class="flexbox">
      <router-link to="/">
        <Icon class="icon" :icon="icons.library24Regular"/>
      </router-link>
      <router-link to="/customers">
        <Icon class="icon" :icon="icons.usersIcon" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

import library24Regular from '@iconify-icons/fluent/library-24-regular';
import usersIcon from '@iconify-icons/ph/users';


export default {
  name: "navbarComp",
  components: {
    Icon,
  },
  data() {
    return {
      icons: {
        library24Regular,
        usersIcon,
      },
    };
  },

  props: {},

  methods: {},
};
</script>

<style>
.navbar {
  width: 100%;
  background-color: #14213d;
  color: #ffffff;
  padding: 16px 0 32px;
  position: fixed;
  bottom: 0;
}

.flexbox {
  display: flex;
  justify-content: space-evenly;
}

.icon {
  height: 24px;
  width: 24px;
  color: #ffffff;
}

.navbar .menu-item {
  color: #ffffff;
}

.navbar .menu-item:hover,
.menu-item:active {
  color: #fca311;
}
</style>
