<template>
  <div id="navbar" class="navbar">
    <div class="flexbox">
      <router-link to="/">
        <svg
          class="menu-item"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 3h1c1.054 0 1.918.816 1.995 1.85L7 5v14a2.001 2.001 0 0 1-1.85 1.994L5 21H4a2.001 2.001 0 0 1-1.995-1.85L2 19V5c0-1.054.816-1.918 1.85-1.995L4 3h1h-1Zm6 0h1c1.054 0 1.918.816 1.995 1.85L13 5v14a2.001 2.001 0 0 1-1.85 1.994L11 21h-1a2.001 2.001 0 0 1-1.995-1.85L8 19V5c0-1.054.816-1.918 1.85-1.995L10 3h1h-1Zm6.974 2c.84 0 1.608.531 1.89 1.346l.047.157l3.015 11.745a2 2 0 0 1-1.296 2.392l-.144.043l-.969.248a2.002 2.002 0 0 1-2.387-1.284l-.047-.155l-3.016-11.745a2 2 0 0 1 1.298-2.392l.143-.043l.968-.248A1.99 1.99 0 0 1 16.974 5ZM5 4.5H4a.501.501 0 0 0-.492.41L3.5 5v14c0 .244.177.45.41.492L4 19.5h1c.245 0 .45-.178.492-.41L5.5 19V5a.501.501 0 0 0-.41-.492L5 4.5Zm6 0h-1a.501.501 0 0 0-.492.41L9.5 5v14c0 .244.177.45.41.492l.09.008h1c.245 0 .45-.178.492-.41L11.5 19V5a.501.501 0 0 0-.41-.492L11 4.5Zm5.975 2l-.063.004l-.063.013l-.968.247a.498.498 0 0 0-.376.51l.015.1l3.016 11.745a.5.5 0 0 0 .483.375l.063-.003l.062-.012l.97-.25a.5.5 0 0 0 .374-.519l-.015-.088l-3.015-11.747a.501.501 0 0 0-.483-.375Z"
          />
        </svg>
      </router-link>
      <router-link to="/customer">
        <svg
          class="menu-item"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M129.2 156.9a64 64 0 1 0-82.4 0a100.1 100.1 0 0 0-40.6 33.6a12 12 0 0 0 2.9 16.7a11.8 11.8 0 0 0 6.9 2.2a11.9 11.9 0 0 0 9.8-5.1a76 76 0 0 1 124.4 0a12 12 0 1 0 19.6-13.8a100.1 100.1 0 0 0-40.6-33.6ZM48 108a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm200.4 99.2a11.8 11.8 0 0 1-6.9 2.2a12.1 12.1 0 0 1-9.8-5.1a76.2 76.2 0 0 0-62.2-32.3a12 12 0 0 1 0-24a40 40 0 0 0 0-80a39.1 39.1 0 0 0-10.8 1.5a12 12 0 1 1-6.5-23.1a62.8 62.8 0 0 1 17.3-2.4a63.9 63.9 0 0 1 41.2 112.9a100.1 100.1 0 0 1 40.6 33.6a11.9 11.9 0 0 1-2.9 16.7Z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbarComp",
  components: {},
  data() {
    return {
      icons: {},
    };
  },

  props: {},

  methods: {},
};
</script>

<style>
.navbar {
  width: 100%;
  background-color: #14213d;
  color: #ffffff;
  padding: 16px 0;
  position: fixed;
  bottom: 0;
}

.flexbox {
  display: flex;
  justify-content: space-evenly;
}

svg {
  height: 24px;
  width: 24px;
}

.navbar .menu-item {
  color: #ffffff;
}

.navbar .menu-item:hover,
.menu-item:active {
  color: #fca311;
}
</style>
