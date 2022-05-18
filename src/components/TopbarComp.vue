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
      <button class="searchButton" type="submit">search</button>
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
  width: 75%;
  float:left;
  border-radius: 20px 0 0 20px;
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