<template>
  <div class="scrum-flexbox">
    <div id="btn" class="scrum-btn vertical-center">
      <svg
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
          d="M20.496 5.627A2.25 2.25 0 0 1 22 7.75v10A4.25 4.25 0 0 1 17.75 22h-10a2.25 2.25 0 0 1-2.123-1.504l2.097.004H17.75a2.75 2.75 0 0 0 2.75-2.75v-10l-.004-.051V5.627ZM17.246 2a2.25 2.25 0 0 1 2.25 2.25v12.997a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.247V4.25A2.25 2.25 0 0 1 4.25 2h12.997Zm0 1.5H4.25a.75.75 0 0 0-.75.75v12.997c0 .414.336.75.75.75h12.997a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75ZM10.75 6.75a.75.75 0 0 1 .75.75V10H14a.75.75 0 0 1 0 1.5h-2.5V14a.75.75 0 0 1-1.5 0v-2.5H7.5a.75.75 0 0 1 0-1.5H10V7.5a.75.75 0 0 1 .75-.75Z"
        />
      </svg>
    </div>
    <div id="btn" class="scrum-btn vertical-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="m432 144l-28.67 275.74A32 32 0 0 1 371.55 448H140.46a32 32 0 0 1-31.78-28.26L80 144"
        />
        <rect
          width="448"
          height="80"
          x="32"
          y="64"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          rx="16"
          ry="16"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M312 240L200 352m112 0L200 240"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrumComp",
  data() {
    return {};
  },

  props: {},

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
</style>
