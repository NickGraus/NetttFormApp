<template>
  <div class="customers">
    <ListItem v-for="item in items" :key="item.id" :title="item.name" subtitle=""></ListItem>
  </div>
</template>

<script>
export default {
  name: "InspectionView",
  components: {},
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch("http://nick-api.test/api/inspection")
        .then(res => res.json())
        .then(data => this.items = data.data)
        .catch(err => console.log(err.message))
  },
  props: {},

  methods: {},
};
</script>