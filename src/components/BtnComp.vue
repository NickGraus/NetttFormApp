<template>
  <div id="btn" :class="state">{{btnName}}</div>
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
   padding: 16px;
   display: inline-block;
   font-size: 14px;
   text-align: center;
   border-radius: 4px;
 }
 .primary {
   background-image: linear-gradient(to right, #7D0FB0 , #BF1DC2);
   color: white;
 }

 .secondary {
   background-color: #ffffff;
   color: #9B15B8;
   box-sizing: border-box;
   box-shadow:0px 0px 0px 3px #9B15B8 inset;
 }

</style>