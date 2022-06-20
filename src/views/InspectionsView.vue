<template>
  <div class="list">
    <div v-if="!isOffline" class="online">
      <div v-if="items.length <= 0">
        We couldn't get the inspections to load.
      </div>
    <ListItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.name"
      subtitle=""
      type="inspection"
      @onSelect="onSelect(item)"
    ></ListItem>
    </div>
    <div v-if="isOffline" class="offline">
      <div v-if="offlineItems.length <= 0">
        You don't have any inspections available offline
      </div>
      <ListItem
      v-for="offlineItem in offlineItems"
      :key="offlineItem.id"
      :id="offlineItem.id"
      :title="offlineItem.name"
      subtitle=""
      type="inspection"
      >
      </ListItem>
    </div>
    <div v-else class="note">Het was niet mogelijk om de data offline weer te geven</div>
  </div>
</template>

<script>
import ListItem from "./../components/ListItemComp.vue";
import axios from "axios";

export default {
  name: "InspectionsView",
  components: {
    ListItem,
  },

  data() {
    return {
      items: [],
      offlineItems: [],
      database: null,
      isOffline: !navigator.onLine,
    };
  },

  async created() {
    this.database = await this.getDatabase();
    this.offlineItems = await this.getLocalInspections();
  },

  mounted() {
    axios
        .get("https://app-api.nettt.nl/api/inspection")
        .then(response => (this.items = response.data.data))

    window.addEventListener("offline", () => {
      this.isOffline = true;
    });
    window.addEventListener("online", () => {
      this.isOffline = false;
    });
  },

  props: {
    getDatabase: { type: Function },
  },




  methods: {
    checkOnlineStatus(e) {
      this.online = e;
      console.log(e);
    },

    async onSelect(item) {
      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('inspections', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }
        this.offlineItems.forEach(item => {
          transaction.objectStore('inspections').put({
            key: item.id,
            name: item.name,
            customer_id: item.customer_id,
            customer_name: item.customer_name,
          })
        })
      })
    },
    async getLocalInspections() {
      return new Promise((resolve) => {
        let transaction = this.database.transaction("inspections", "readonly");
        let inspectionsStore = transaction.objectStore("inspections")
        let inspections = inspectionsStore.getAll();

        inspections.onsuccess = e => {
          resolve(e.target.result);
        }
      })
    },
  },
};
</script>
