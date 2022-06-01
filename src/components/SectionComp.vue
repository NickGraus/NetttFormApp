<template>
  <div id="section" class="section">
    <div class="sectiontitle" v-if="sectionTitle !== ''">
      {{ sectionTitle }}
    </div>
    <CollapseItem v-for="item in items.sections" :title="item.name" :section_id="item.id"></CollapseItem>
  </div>
</template>

<script>
import CollapseItem from "./CollapseItemComp.vue";

export default {
  name: "sectionComp",
  components: {
    CollapseItem,
  },
  data() {
    return {
      items: [],
      inspection_id: this.$route.params.id,
    };
  },
  mounted() {
    fetch("https://app-api.nettt.nl/api/inspection/" + this.inspection_id)
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
