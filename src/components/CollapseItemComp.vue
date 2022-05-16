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
      <div class="input-title">Datum uitvoering</div>
      <input class="inputfield" v-model="message">
      <div class="input-title">Uitvoerder</div>
      <input class="inputfield" v-model="message">
      <div class="input-title">Oppervlakte</div>
      <input class="inputfield" v-model="message">
    </div>
  </div>
</template>



<script>
import Button from "./BtnComp.vue";
export default {
  name: "collapseditemComp",
  components: {
    Button,
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

.collapsed .input-title {
  margin-bottom: 4px;
}


.collapsed .inputfield {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 30px;
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