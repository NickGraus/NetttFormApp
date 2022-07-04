<template>
  <div class="scrum-flexbox">
    <div id="btn" class="scrum-btn vertical-center" v-if="update">
      <Icon class="icon" :icon="icons.save24Regular" />
    </div>
    <div id="btn" class="scrum-btn vertical-center" v-if="remove">
      <Icon class="icon" :icon="icons.trashBinOutline" />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

import save24Regular from '@iconify-icons/fluent/save-24-regular';
import trashBinOutline from '@iconify-icons/ion/trash-bin-outline';


export default {
  name: "ScrumComp",
  components: {
    Icon,
  },
  data() {
    return {
      icons: {
        save24Regular,
        trashBinOutline,
      },
    };
  },

  props: {
    update: Boolean,
    remove: Boolean,
  },

  methods: {},
};
</script>

<style>
.scrum-flexbox {
  display: flex;
  justify-content: space-evenly;
  padding: 32px 0 100px;
}

.scrum-btn {
  background-color: #fca311;
  height: 44px;
  width: 44px;
  border-radius: 22px;
  text-align: center;
  color: #ffffff;
}

.scrum-btn:hover {
  background-color: #14213d;
  text-align: center;
  color: #ffffff;
}

.scrum-btn:hover svg {
  color: #fca311;
}
</style>
