<template>
  <div id="collapseItem" class="collapseItem" :class="state">
    <div class="grid">
      <div class="content">
        <div class="collapse item-title">{{ title }}</div>
      </div>
      <Button v-if="isShow" btnName="Oplaan" state="primary" />
      <div class="details" @click="isShow = !isShow">
        <div v-if="!isShow" class="icon">
          <Icon class="icon blue" :icon="icons.arrowIosDownwardFill" />
        </div>
        <div v-else class="icon">
          <Icon class="icon blue" :icon="icons.arrowIosUpwardFill" />
        </div>
      </div>
    </div>
    <div class="collapsed" v-if="isShow">
      <InputField v-for="field in fields" :inputTitle="field.name" :placeholder="field.name" fieldType="text" />
      <InputField inputTitle="Uitvoerder" placeholder="" fieldType="text" />
      <InputField
        inputTitle="Uitvoerder"
        fieldType="radio"
        name="test"
        label="ja"
      />
      <!--      <InputField inputTitle="Uitvoerder" fieldType="checkbox" name="test" label="misschien" />-->
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import arrowIosDownwardFill from '@iconify-icons/eva/arrow-ios-downward-fill';
import arrowIosUpwardFill from '@iconify-icons/eva/arrow-ios-upward-fill';

import Button from "./BtnComp.vue";
import InputField from "./InputfieldComp.vue";

export default {
  name: "collapseditemComp",
  components: {
    Icon,
    Button,
    InputField,
  },
  data() {
    return {
      icons: {
        arrowIosDownwardFill,
        arrowIosUpwardFill,
      },
      isShow: false,
      inspection_id: this.$route.params.id,
    };
  },
  mounted() {
    fetch("https://app-api.nettt.nl/api/inspection/" + this.inspection_id)
        .then((res) => res.json())
        .then((data) => (this.fields = data.data.sections))
        .catch((err) => console.log(err.message));  },

  props: {
    title: String,
    subtitle: String,
    state: String,
  },

  methods: {},
};
</script>

<style>
.collapseItem {
  padding: 8px 16px;
  border-bottom: 1px solid #fca311;
}

.grid {
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 16px;
}

.collapsed {
  margin-top: 16px;
}

</style>
