<template>
  <div id="collapseItem" class="collapseItem" :class="state">
    <div class="grid">
      <div class="content">
        <div class="collapse item-title">{{ title }}Joa</div>
      </div>
      <Button v-if="isShow" btnName="Oplaan" state="primary"/>
      <div class="details" @click="isShow = !isShow">
        <div v-if="!isShow" class="icon">V</div>
        <div v-else class="icon upside-down">V</div>
      </div>
    </div>
    <div class="collapsed" v-if="isShow">
      <InputField inputTitle="Datum uitvoering" fieldType="text" />
      <InputField inputTitle="Uitvoerder" fieldType="text" />
      <InputField inputTitle="Uitvoerder" fieldType="radio" name="test" label="ja" />
<!--      <InputField inputTitle="Uitvoerder" fieldType="checkbox" name="test" label="misschien" />-->
    </div>
  </div>
</template>



<script>
import Button from "./BtnComp.vue";
import InputField from "./InputfieldComp.vue";

export default {
  name: "collapseditemComp",
  components: {
    Button,
    InputField,
  },
  data() {
    return {
      isShow: false,
    };
  },

  props: {
    title: String,
    subtitle: String,
  },

  methods: {}
};
</script>

<style>

.collapseItem {
  padding: 8px 16px;
  border-bottom: 1px solid #FCA311;
}

.grid {
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 16px;
}

.collapsed {
  margin-top: 16px;
}

.icon {
  margin-right: -16px;
}
.upside-down {
  display: inline;
  -moz-transform: scale(-1, -1);
  -webkit-transform: scale(-1, -1);
  -o-transform: scale(-1, -1);
  -ms-transform: scale(-1, -1);
  transform: scale(-1, -1);
  margin-right: 0;
}

</style>