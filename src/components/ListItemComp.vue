<template>
  <router-link :to="{ path: '/inspection/' + id }">
    <div id="listItem" class="listItem">
      <div class="content" :class="subtitle ? 'vertical-center' : ''">
        <div class="item-title">{{ title }}</div>
        <div class="item-subtitle">{{ subtitle }}</div>
      </div>
      <div class="download">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
          <path fill="currentColor" d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9ZM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007Z"/>
        </svg>
      </div>
        <svg class="menu-item" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/>
        </svg>
    </div>
  </router-link>
</template>



<script>
export default {
  name: "listitemComp",
  data() {
    return {
    };
  },

  props: {
    title: String,
    subtitle: String,
    id: String,

  },

  methods: {}
};
</script>

<style>
.listItem {
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 16px;
  border-bottom: 1px solid #FCA311;
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
  color: #14213D;
}

.item-subtitle {
  font-size: 12px;
  color: #FCA311;
}

.download, .details {
  display: flex;
  justify-content: end;
  align-items: center;
}

.listItem .menu-item {
  color: #14213D;
}

.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>