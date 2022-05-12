<template>
  <div id="topbar" class="topbar" :class="state">
    <div class="extended" v-if="state !== 'default'">
    back
    </div>
    <div class="title">
      {{title}}
    </div>
    <div class="searchForm" v-if="state === 'search'">
      <input class="searchField" v-model="message" placeholder="zoeken">
      <button class="searchButton" type="submit">search</button>
    </div>
  </div>
</template>



<script>
export default {
  name: "topbarComp",
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


.searchField {
  width: 75%;
  float:left;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 20px 0 0 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -moz-box-shadow:    inset 4px 4px 10px -8px #000000;
  -webkit-box-shadow: inset 4px 4px 10px -8px #000000;
  box-shadow:         inset 4px 4px 10px -8px #000000;
}

.searchButton {
  width: 25%;
  float:left;
  padding: 8px 16px;
  box-sizing: border-box;
  background-color: #FCA311;
  border-radius: 0 20px 20px 0;
  border: 1px solid transparent;
  border-right: 1px solid transparent;
  color: #ffffff;

}

</style>