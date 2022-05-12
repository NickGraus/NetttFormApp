<template>
  <div id="listItem" class="listItem" :class="state">
    <div class="content">
      <div class="itemTitle">{{ title }}</div>
      <div class="itemSubtitle">{{ subtitle }}</div>
    </div>
    <div class="download">D</div>
    <div class="details">-></div>
  </div>
</template>



<script>
export default {
  name: "listitemComp",
  data() {
    return {
    };
  },

  props: {
    title: String,
    subtitle: String,

  },

  methods: {}
};
</script>

<style>
.listItem {
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
  border-bottom: 1px solid #FCA311;
}
.itemTitle {
  font-size: 18px;
  color: #14213D;
}

.itemSubtitle {
  font-size: 12px;
  color: #FCA311;
}

.download, .details {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>