<template>
  <div id="btn" class="btn" :class="state">{{ btnName }}hello</div>
</template>

<script>
export default {
  name: "btnComp",
  data() {
    return {};
  },

  props: {
    btnName: String,
    state: String,
  },

  methods: {},
};
</script>

<style>
.btn {
  padding: 8px 16px;
  display: inline-block;
  font-size: 14px;
  text-align: center;
  border-radius: 32px;
}
.primary {
  background-color: #fca311;
  color: white;
}

.secondary {
  background-color: #ffffff;
  color: #fca311;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 2.5px #fca311 inset;
}
</style>
