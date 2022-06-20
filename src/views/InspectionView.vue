<template>
  <InfoSection
    sectionTitle="Project info"
    :customer="sections.customer_name"
    :form="sections.form_type"
    :date="sections.inspection_date"
  />
  <Section v-for="section in sections.sections" :section_id="section.id" :sectionTitle="section.name">
  </Section>

  <Scrum />
</template>

<script>
import Section from "./../components/SectionComp.vue";
import InfoSection from "../components/InfoSectionComp.vue";
import Scrum from "../components/ScrumComp.vue";
import CollapseItem from "../components/CollapseItemComp.vue";
import save24Regular from "@iconify-icons/fluent/save-24-regular";
import trashBinOutline from "@iconify-icons/ion/trash-bin-outline";
import axios from "axios";

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
    axios
        .get("https://app-api.nettt.nl/api/inspection/" + this.inspection_id)
        .then(response => (this.sections = response.data.data))
        // .catch(function (error) {
        //   if (error.response) {
        //     // Request made and server responded
        //     console.log(error.response.data);
        //     console.log(error.response.status);
        //     console.log(error.response.headers);
        //   } else if (error.request) {
        //     // The request was made but no response was received
        //     console.log(error.request);
        //   } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.log('Error', error.message);
        //   }
        // });
  },
  props: {},

  methods: {},
};
</script>
