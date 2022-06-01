<template>
  <InfoSection
    sectionTitle="Project info"
    :customer="sections.customer_name"
    :form="sections.form_type"
    :date="sections.inspection_date"
  />
  <Section v-for="section in sections.sections.slice().reverse()" :section_id="section.id" :sectionTitle="section.name">
  </Section>

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
      sections: [],
      inspection_id: this.$route.params.id,
    };
  },
  mounted() {
    fetch("https://app-api.nettt.nl/api/inspection/" + this.inspection_id)
      .then((res) => res.json())
      .then((data) => (this.sections = data.data))
      .catch((err) => console.log(err.message));
  },
  props: {},

  methods: {},
};
</script>
