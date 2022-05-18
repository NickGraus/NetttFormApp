<template>
  <div class="scrum-flexbox">
    <div id="btn" class="scrum-btn">icon</div>
    <div id="btn" class="scrum-btn">icon</div>
  </div>
</template>



<script>
export default {
  name: 'ScrumComp',
  data() {
    return {
    };
  },

  props: {
  },

  methods: {}
};
</script>

<style>
.scrum-flexbox {
  display: flex;
  justify-content: space-evenly;
  padding: 0 0 100px;
}

.scrum-btn {
  background-color: #fca311;
  height: 44px;
  width: 44px;
  border-radius: 22px;
  text-align: center;
}

</style>