<template>
  <div id="section" class="section">
    hello
    <div class="sectiontitle" v-if="sectionTitle !== ''">
      {{ sectionTitle }}
    </div>
    <div class="list">
      <ListItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        subtitle=""
      ></ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItemComp.vue";

export default {
  name: "sectionComp",
  components: {
    ListItem,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch("http://nick-api.test/api/inspection")
      .then((res) => res.json())
      .then((data) => (this.items = data.data))
      .catch((err) => console.log(err.message));
  },
  props: {
    sectionTitle: String,
  },

  methods: {},
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
