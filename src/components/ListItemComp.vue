<template>
  <div id="listItem" class="listItem" :class="state">
    <div class="content" :class="subtitle ? 'vertical-center' : ''">
      <div class="item-title">{{ title }}</div>
      <div class="item-subtitle">{{ subtitle }}</div>
    </div>
    <div class="download">D</div>
    <router-link to="/inspection">
      <div class="menu-item">-></div>
    </router-link>
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
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 16px;
  border-bottom: 1px solid #FCA311;
}

.content {
  min-height: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.vertical-center {
  display: unset;
}

.item-title {
  font-size: 18px;
  color: #14213D;
}

.item-subtitle {
  font-size: 12px;
  color: #FCA311;
}

.download, .details {
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>