<template>
  <div id="section" class="section">
    <div class="sectiontitle" v-if="sectionTitle !== ''">{{ sectionTitle }}</div>
    <div class="list">
      <ListItem v-for="item in items" :key="item.id" :title="'Inspectie ' + item.key" subtitle=""></ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItemComp.vue";

export default {
  name: 'sectionComp',
  components: {
    ListItem,
  },
  data() {
    return {
      items: [{key: 1}, {key: 2}, {key: 3}]
    };
  },

  props: {
    sectionTitle: String,
  },

  methods: {}
};
</script>

<style>
.section {
  margin-bottom: 48px;
}
.sectiontitle {
  color: #fca311;
  font-size: 9pt;
}

</style>