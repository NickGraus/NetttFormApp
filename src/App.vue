<template>
  <div id="app">
    <SplashView :isLoading="isLoading"></SplashView>
    <Topbar title="Titel" state="search" />
    <div class="main">
      <offline-message></offline-message>
      <AddButton />
      <router-view :getDatabase="getDatabase"></router-view>
    </div>
    <Navbar />

  </div>
</template>

<script>
import SplashView from "./views/SplashView.vue";
import Navbar from "./components/NavbarComp.vue";
import Topbar from "./components/TopbarComp.vue";
import AddButton  from "./components/AddComp.vue";
import OfflineMessage from "./components/OfflineMessage.vue"

export default {
  name: "App",
  components: {
    SplashView,
    Topbar,
    Navbar,
    AddButton,
    OfflineMessage
  },
  data() {
    return {
      isLoading: true,
      database: null,
    };
  },
  async created() {
    this.database = await this.getDatabase();
    // this.saveCustomer();
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },

  props: {
    title: String,
    description: String,
  },
  methods: {
    async getDatabase() {
      return new Promise((resolve, reject) => {
        let db = window.indexedDB.open("NetttFormAppDB");

        db.onerror = e => {
          reject("Error with opening the database.")
        };

        db.onsuccess = e => {
          console.log("db.onsucces", e)
          resolve(e.target.result);
        }

        db.onupgradeneeded = e => {
          e.target.result.createObjectStore("inspections", {keyPath: "key"});
          e.target.result.createObjectStore("customers", {keyPath: "key"});
        }
      });
    },
  }
};
</script>

<style>
@font-face {
  font-family: "SF Pro Text";
  src: local("SF Pro Text"),
    url("./fonts/SFProText-Semibold.ttf") format("truetype");
}

body {
  margin: 0;
}

a {
  text-decoration: none;
}
#app {
  font-family: "SF Pro Text";
}

.main {
  padding: 140px 16px 16px;
}

.jantje {
  margin-top: 200px;
}
</style>
