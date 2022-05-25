<template>
  <div class="list">
    <ListItem
      v-for="item in items.slice(0, 20)"
      :key="item.id"
      :id="item.id"
      :title="item.name"
      subtitle=""
      type="inspection"
    ></ListItem>
  </div>
</template>

<script>
import ListItem from "./../components/ListItemComp.vue";

export default {
  name: "InspectionsView",
  components: {
    ListItem,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch("https://app-api.nettt.nl/api/inspection")
      .then((res) => res.json())
      .then((data) => (this.items = data.data))
      .catch((err) => console.log(err.message));
  },

  props: {},

  methods: {},
};
</script>
