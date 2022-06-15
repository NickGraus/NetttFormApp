<template>
  <div class="customers">
    <ListItem
      v-for="customer in customers.slice(0,10)"
      :key="customer.id"
      :id="customer.id"
      :title="customer.name"
      type="customer"
    ></ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/ListItemComp";

export default {
  name: "InspectionView",
  components: {
    ListItem,
  },
  data() {
    return {
      customers: [],
    };
  },
  mounted() {
    fetch("https://app-api.nettt.nl/api/customer")
      .then((res) => res.json())
      .then((data) => (this.customers = data.data))
      .then(console.log(this.customers))
      .catch((err) => console.log(err.message));
  },
  props: {},

  methods: {},
};
</script>
