<template>
    <div id="listItem" class="listItem" :class="type !== 'inspection' ? ' no-gap' : ''">
      <router-link :to="{ path: '/' + type + '/' + id }">
        <div class="content" :class="subtitle ? 'vertical-center' : ''">
          <div class="item-title">{{ title }}</div>
          <div class="item-subtitle">{{ subtitle }}</div>
        </div>
      </router-link>
      <div :class="'download ' + type" v-if="type === 'inspection'" @click="buttonClickHandler(); downloaded = !downloaded">
        <Icon v-if="!downloaded" class="icon blue" :icon="Icons.arrowDownload48Filled" />
        <Icon v-else-if="downloaded" class="icon blue" :icon="Icons.checkIcon" />
      </div>
      <router-link :to="{ path: '/' + type + '/' + id }">
        <Icon class="icon blue" :icon="Icons.arrowIosForwardFill" />
      </router-link>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import arrowDownload48Filled from '@iconify-icons/fluent/arrow-download-48-filled';
import checkIcon from '@iconify-icons/bi/check';



export default {
  name: "listItemComp",
  components: {
    Icon,
  },
  data() {
    return {
      Icons: {
        arrowIosForwardFill,
        arrowDownload48Filled,
        checkIcon,
        downloaded: false
      },
    };
  },

  props: {
    title: String,
    subtitle: String,
    id: Number,
    type: String,
    downloaded: Boolean,
  },

  mounted() {
  },

  methods: {
    buttonClickHandler() {
      this.$emit("onSelect")
    },
  },
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
