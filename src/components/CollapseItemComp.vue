<template>
  <div id="collapseItem" class="collapseItem" :class="state">
    <div class="grid">
      <div class="content">
        <div class="collapse item-title">{{ title }}</div>
      </div>
      <Button v-if="isShow" btnName="Oplaan" state="primary" />
      <div class="details" @click="isShow = !isShow">
        <div v-if="!isShow" class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
            />
          </svg>
        </div>
        <div v-else class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="collapsed" v-if="isShow">
      <InputField :inputTitle="this.name" fieldType="text" />
      <InputField inputTitle="Uitvoerder" fieldType="text" />
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

.icon {
  margin-right: -16px;
}
</style>
