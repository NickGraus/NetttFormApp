<template>
  <div class="message">
    <div v-if="!isOffline" class="message-container online">
      U bent momenteel online
    </div>
    <div  v-if="isOffline" class="message-container offline">
      U bent momenteel offline
    </div>
  </div>
</template>

<script>
// import writeToLocal from "@/components/WriteToLocal";


export default {
  name: "OfflineMessage",
  components: {
    // writeToLocal,
  },
  data() {
    return {
      isOffline: !navigator.onLine
    };
  },
  mounted () {
    window.addEventListener("offline", () => {
      this.isOffline = true;
    });
    window.addEventListener("online", () => {
      this.isOffline = false;
    });
  },
  methods: {
    checkOnlineStatus(e) {
      this.online = e;
    },
  }
}
</script>


<style>
.message {
  margin-bottom: 16px;
  display:flex;
  justify-content: center;
}

.message-container.offline {
  background-color: #c4c4c4;
}

.message-container.online {
  background-color: #fca311;
}

.message-container {
  padding: 5px 16px;
  border-radius: 20px;
  color: #14213d;
  text-align: center;
  width: fit-content;
}
</style>