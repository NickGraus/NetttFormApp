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
  bottom: 80px;
  right: 20px;
  background-color: #fca311;
  height: 44px;
  width: 44px;
  border-radius: 22px;
  padding: 0;
  display:flex;
  justify-content: center;
  align-items: center;
}

.add svg {
  height: 24px;
  width: 24px;
}
</style>