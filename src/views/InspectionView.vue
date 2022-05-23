<template>
  <Section :sectionTitle="item.name" />
  <InfoSection sectionTitle="Project info" customer="Nettt Interactieve Media" form="Dakinspectie" date="2022-05-10" />
  <Section sectionTitle="Inspectie instellingen" />
  <CollapseItem />
  <Scrum />

</template>

<script>
import Section from "./../components/SectionComp.vue";
import InfoSection from "../components/InfoSectionComp.vue";
import Scrum from "../components/ScrumComp.vue";
import CollapseItem  from "../components/CollapseItemComp.vue";

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
