<template>
    <div class="preloader" :class="{ loader: true, fadeout: !isLoading }">
      <img :src="require(`@/assets/img/logo_nettt.png`)" alt="logo" class="logo">
    </div>
</template>

<script>
export default {
  name: "SplashView",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:absolute;
  width:100%;
  height:100%;
  background-color: #ffffff;
  z-index: 9999;
}

.fadeout {
  animation: fadeout 2s forwards;
}

.logo {
 height: 150px;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>