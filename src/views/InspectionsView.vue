<template>
  <Section sectionTitle="" />
</template>

<script>
import Section from "./../components/SectionComp.vue";

export default {
  name: "InspectionsView",
  components: {
    Section,
  },
  data() {
    return {};
  },
  mounted() {
    fetch("http://nick-api.test/api/inspection/" + this.id)
        .then(res => res.json())
        .then(data => this.items = data.data)
        .catch(err => console.log(err.message))
  },

  props: {},

  methods: {},
};
</script>
