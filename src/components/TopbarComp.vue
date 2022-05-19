<template>
  <div id="topbar" class="topbar" :class="state">
    <div class="extended" v-if="state !== 'default'">
    back
    </div>
    <div class="title">
      {{title}}
    </div>
    <div class="searchForm" v-if="state === 'search'">
      <InputField fieldType="text" placeholder="zoeken" />
      <button class="searchButton" type="submit"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m11.25 11.25l3 3"/><circle cx="7.5" cy="7.5" r="4.75"/></g></svg></button>
    </div>
  </div>
</template>



<script>
import InputField from "./InputfieldComp.vue";


export default {
  name: "topbarComp",
  components: {
    InputField,
  },
  data() {
    return {
    };
  },

  props: {
    title: String,
    state: String,
  },

  methods: {}
};
</script>

<style>
.topbar {
  background-color: #ffffff;
  color: #14213D;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position:relative;
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

.searchForm input[type=text] {
  width: 80%;
  float:left;
  border-radius: 20px 0 0 20px;
}

.searchButton {
  width: 20%;
  float:left;
  padding: 0 20px 0 16px;
  box-sizing: border-box;
  background-color: #FCA311;
  border-radius: 0 20px 20px 0;
  border: 1px solid transparent;
  border-right: 1px solid transparent;
  color: #ffffff;
  height: 33px;
}

</style>