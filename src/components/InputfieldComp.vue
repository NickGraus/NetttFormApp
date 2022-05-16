<template>
    <div class="input-title">{{ inputTitle }}</div>
    <input :type="fieldType" :placeholder="placeholder" :value="value" :name="name">
    <label v-if="fieldType === 'checkbox'">{{ label }}</label>
  <label v-if="fieldType === 'radio'">{{ label }}</label>
</template>


<script>
export default {
  name: "inputfieldComp",
  data() {
    return {
    };
  },

  props: {
    inputTitle: String,
    fieldType: String,
    placeholder: String,
    label: String,
    value: String,
    name: String,

  },

  methods: {}
};
</script>

<style>

.input-title {
  margin-bottom: 4px;
}


input[type=text] {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 30px;
  padding: 8px 16px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -moz-box-shadow:    inset 4px 4px 10px -8px #000000;
  -webkit-box-shadow: inset 4px 4px 10px -8px #000000;
  box-shadow:         inset 4px 4px 10px -8px #000000;
}

input[type=radio] {
  appearance: none;
  background-color: #fff;
  margin: 0 5px 0 0;
  font: inherit;
  width: 24px;
  height: 24px;
  border: 0.15em solid #C4C4C4;
  border-radius: 50%;
  transform: translateY(-0.075em);
}

input[type="radio"]:checked {
  border-color: #FCA311;
}

input[type="radio"]:checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 14px;
  width: 14px;
  border-radius: 10px;
  border-color: #FCA311;
  background-color: #FCA311;
}


</style>