<template>
  <router-link to="/customer/new">
    <div class="add">
      <Icon :icon="icons.addIcon" />
    </div>
  </router-link>
</template>



<script>
import { Icon } from '@iconify/vue';
import addIcon from '@iconify-icons/carbon/add';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      icons: {
        addIcon,
      },
    };
  },
};
</script>



<style>
.add {
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: #fca311;
  height: 56px;
  width: 56px;
  border-radius: 56px;
  padding: 0;
  display:flex;
  justify-content: center;
  align-items: center;
}

.add svg {
  height: 32px;
  width: 32px;
}
</style>