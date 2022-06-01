<template>
  <label>name</label>
  <input type="text" :value="item.name">
  <label>Adres:</label>
  <input type="text" :value="item.address">
  <label>Stad:</label>
  <input type="text" :value="item.city">
  <label>Land:</label>
  <input type="text" :value="item.country">
  <Scrum update="update" />
</template>

<script>
import Scrum from "../components/ScrumComp.vue";
import BtnComp from "../components/BtnComp.vue"

export default {
  name: "InspectionView",
  components: {
    Scrum,
    BtnComp,
  },
  data() {
    return {
      item: [],
      id: this.$route.params.customer_id,
    };
  },
  mounted() {
    fetch("https://app-api.nettt.nl/api/customer/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.item = data.data))
      .catch((err) => console.log(err.message));
  },
  props: {},

  methods: {},
};
</script>
