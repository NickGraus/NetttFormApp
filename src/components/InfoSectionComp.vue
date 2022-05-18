<template>
  <div id="section" class="section">
    <div class="sectiontitle" v-if="sectionTitle !== ''">{{ sectionTitle }}</div>
    <div class="block">
      <div class="label customer">Klant:</div>
      <div class="name customer">{{ customer }}</div>
      <div class="label form label">Formulier:</div>
      <div class="name form">{{ form }}</div>
      <div class="label date label">Datum:</div>
      <div class="name date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoSectionComp',
  components: {
  },
  data() {
    return {
    };
  },

  props: {
    sectionTitle: String,
    customer: String,
    form: String,
    date: String,
  },

  methods: {}
};
</script>

<style>
.block {
  background-color: #fca311;
  padding: 16px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 5px;
  margin-top: 10px;
}

.label {
  color: #14213D;
}

.name {
  color: #ffffff;
}


</style>