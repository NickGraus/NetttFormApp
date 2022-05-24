<template>
  <InfoSection
    :sectionTitle="item.section_1_name"
    :customer="item.customer_name"
    :form="item.form_type"
    :date="item.inspection_date"
  />
  <Section :sectionTitle="item.section_1_name" />
  <CollapseItem />
  <Scrum />
</template>

<script>
import Section from "./../components/SectionComp.vue";
import InfoSection from "../components/InfoSectionComp.vue";
import Scrum from "../components/ScrumComp.vue";
import CollapseItem from "../components/CollapseItemComp.vue";

export default {
  name: "InspectionView",
  components: {
    Section,
    InfoSection,
    Scrum,
    CollapseItem,
  },
  data() {
    return {
      item: [],
      id: this.$route.params.id,
    };
  },
  mounted() {
    fetch("http://nick-api.test/api/inspection/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.item = data.data))
      .catch((err) => console.log(err.message));
  },
  props: {},

  methods: {},
};
</script>
