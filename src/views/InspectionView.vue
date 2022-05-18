<template>
  <Section sectionTitle="Secties" />
  <InfoSection sectionTitle="Project info" customer="Nettt Interactieve Media" form="Dakinspectie" date="2022-05-10" />
  <Section sectionTitle="Inspectie instellingen" />
  <Scrum />
</template>

<script>
import Section from "./../components/SectionComp.vue";
import InfoSection from "../components/InfoSectionComp.vue";
import Scrum from "../components/ScrumComp.vue";

export default {
  name: "InspectionView",
  components: {
    Section,
    InfoSection,
    Scrum,
  },
  data() {
    return {};
  },

  props: {},

  methods: {},
};
</script>
