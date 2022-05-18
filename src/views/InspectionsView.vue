<template>
  <div class="inspections">
      <ListItem title="Titel" subtitle="" />
    <CollapseItem />
    </div>
</template>

<script>
import ListItem from "./../components/ListItemComp.vue";
import CollapseItem from "./../components/CollapseItemComp.vue";

export default {
  name: "InspectionsView",
  components: {
    ListItem,
    CollapseItem,
  },
  data() {
    return {};
  },

  props: {},

  methods: {},
};
</script>
