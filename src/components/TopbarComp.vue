<template>
  <div id="topbar" class="topbar" :class="state">
    <div class="extended" v-if="state !== 'default'">
      <Icon class="icon back blue"
            :icon="icons.arrowLeftBold"
            @click="goBack"
            v-if="this.$route.name !== 'Inspections' && this.$route.name !== 'Customers'
      " />
    </div>
    <div
      class="title"
      v-if="this.$route.name">
      {{ this.$route.name }}
    </div>
    <div class="title" v-else>
      {{ title }}
    </div>
    <div class="searchForm" v-if="state === 'search'">
      <input type="text" v-model="search">
      <button class="searchButton" @click="onSearch">
        <Icon class="icon" :icon="icons.searchIcon" />
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

import searchIcon from '@iconify-icons/fe/search';
import arrowLeftBold from '@iconify-icons/ep/arrow-left-bold';

import InputField from "./InputfieldComp.vue";


export default {
  name: "topbarComp",
  components: {
    InputField,
    Icon,
  },
  data() {
    return {
      search: "",
      icons: {
        searchIcon,
        arrowLeftBold,
      },
    };
  },

  props: {
    title: String,
    state: String,
  },

  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    onSearch() {
      this.$emit('searched', this.search)
    }
  },
};
</script>

<style>
.topbar {
  background-color: #ffffff;
  color: #14213d;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: block;
  overflow: auto;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
}
.title {
  font-size: 24px;
  text-align: center;
}

.extended {
  position: absolute;
}

.searchForm {
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
}

.searchForm input[type="text"] {
  width: 80%;
  float: left;
  border-radius: 20px 0 0 20px;
}

.searchButton {
  width: 20%;
  float: left;
  padding: 0 20px 0 16px;
  box-sizing: border-box;
  background-color: #fca311;
  border-radius: 0 20px 20px 0;
  border: 1px solid transparent;
  border-right: 1px solid transparent;
  height: 33px;
}

.blue {
  color: #14213d;
}
</style>
