<template>
  <Section sectionTitle="Secties" />
  <InfoSection sectionTitle="Project info" customer="Nettt Interactieve Media" form="Dakinspectie" date="2022-05-10" />
  <Section sectionTitle="Inspectie instellingen" />
</template>

<script>
import Section from "./../components/SectionComp.vue";
import InfoSection from "../components/InfoSectionComp.vue";

export default {
  name: "InspectionsView",
  components: {
    Section,
    InfoSection,
  },
  data() {
    return {};
  },

  props: {},

  methods: {},
};
</script>
