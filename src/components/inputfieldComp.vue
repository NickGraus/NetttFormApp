<template>
  <label for=""> </label>
  <input class="inputfield" v-model="message" placeholder="zoeken">
</template>



<script>
export default {
  name: 'btnComp',
  data() {
    return {
    };
  },

  props: {
    btnName: String,
    state: String,
  },

  methods: {}
};
</script>

<style>
#btn {
  padding: 8px 16px;
  display: inline-block;
  font-size: 14px;
  text-align: center;
  border-radius: 32px;
}
.primary {
  background-color: #FCA311;
  color: white;
}

.secondary {
  background-color: #ffffff;
  color: #FCA311;
  box-sizing: border-box;
  box-shadow:0px 0px 0px 2.5px #FCA311 inset;
}

</style>