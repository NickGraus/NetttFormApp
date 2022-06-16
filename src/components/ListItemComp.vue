<template>
  <router-link :to="{ path: '/' + type + '/' + id }">
    <div id="listItem" class="listItem" :class="type !== 'inspection' ? ' no-gap' : ''">
      <div class="content" :class="subtitle ? 'vertical-center' : ''">
        <div class="item-title">{{ title }}</div>
        <div class="item-subtitle">{{ subtitle }}</div>
      </div>
      <div :class="'download ' + type" v-if="type === 'inspection'">
        <Icon class="icon blue" :icon="Icons.arrowDownload48Filled" />
      </div>
      <Icon class="icon blue" :icon="Icons.arrowIosForwardFill" />
    </div>
  </router-link>
</template>

<script>
import { Icon } from '@iconify/vue';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import arrowDownload48Filled from '@iconify-icons/fluent/arrow-download-48-filled';


export default {
  name: "listItemComp",
  components: {
    Icon,
  },
  data() {
    return {
      Icons: {
        arrowIosForwardFill,
        arrowDownload48Filled
      },
    };
  },

  props: {
    title: String,
    subtitle: String,
    id: Number,
    type: String,
  },

  methods: {},
};
</script>

<style>
.listItem {
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 16px;
  border-bottom: 1px solid #fca311;
  align-items: center;
}

.no-gap {
  grid-column-gap: 0;
}

.content {
  min-height: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.vertical-center {
  display: unset;
}

.item-title {
  font-size: 18px;
  color: #14213d;
}

.item-subtitle {
  font-size: 12px;
  color: #fca311;
}

.download,
.details {
  display: flex;
  justify-content: end;
  align-items: center;
}

.listItem .menu-item {
  color: #14213d;
}

.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.next {
  align-self: center;
}

svg {
  color: #14213d;
}
</style>
