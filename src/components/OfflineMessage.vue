<template>
  <v-offline class="message"
      @detected-condition="checkOnlineStatus"
      online-class="online"
      offline-class="offline"
  >
    <template v-if="online">
      <div class="container">
        U bent momenteel online
      </div>
    </template>
    <template v-if="!online">
      <div class="container">
        U bent momenteel offline
      </div>
    </template>
  </v-offline>
  <!--  <writeToLocal></writeToLocal>-->
</template>

<script>
// import writeToLocal from "@/components/WriteToLocal";
import { VOffline } from "v-offline";


export default {
  name: "OfflineMessage",
  components: {
    // writeToLocal,
    VOffline,
  },
  data() {
    return {
      online: true,
    };
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

.message .container {
  padding: 5px 16px;
  background-color: #fca311;
  border-radius: 20px;
  color: #14213d;
  text-align: center;
  width: fit-content;
}
</style>