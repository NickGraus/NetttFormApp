<template>
  <div class="input-text" v-if="fieldType === 'text'">
    <div class="input-title">{{ inputTitle }}</div>
    <input
      :type="fieldType"
      :placeholder="placeholder"
      :value="value"
      :name="name"
    />
  </div>
  <div
    :class="fieldType + '-group'"
    v-if="fieldType === 'checkbox' || fieldType === 'radio'"
  >
    <li v-for="radio in radios" :key="radio.id">
      <input
        :type="fieldType"
        :placeholder="placeholder"
        :value="value"
        :name="name"
      />
      <div v-if="fieldType === 'checkbox' || fieldType === 'radio'">
        {{ radio.value }}
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "inputfieldComp",
  data() {
    return {
      radios: [
        { value: "ja", key: 1 },
        { value: "nee", key: 2 },
        { value: "misschien", key: 3 },
      ],
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

  methods: {},
};
</script>

<style>
.input-title {
  margin-bottom: 4px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 30px;
  padding: 8px 16px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 4px 4px 10px -8px #000000;
  -webkit-box-shadow: inset 4px 4px 10px -8px #000000;
  box-shadow: inset 4px 4px 10px -8px #000000;
}

.radio-group li {
  display: grid;
  grid-template-columns: auto 1fr;
  /*align-items: center;*/
  margin-bottom: 5px;
}

input[type="radio"],
input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0 5px 0 0;
  font: inherit;
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #c4c4c4;
  border-radius: 4px;
  transform: translateY(-0.075em);
}

input[type="radio"] {
  border-radius: 50%;
}
input[type="radio"]:checked,
input[type="checkbox"]:checked {
  border-color: #fca311;
}

input[type="radio"]:checked::before,
input[type="checkbox"]:checked::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: #fca311;
}

input[type="radio"]:checked::before {
  content: "";
  background-color: #fca311;
  border-radius: 10px;
  height: 14px;
  width: 14px;
}

input[type="checkbox"]:checked::before {
  content: "X";
  color: #fca311;
}
</style>
