<template>
  <div class="list">
    <div v-if="!isOffline" class="online">
    <ListItem
      v-for="item in items.slice(0, 20)"
      :key="item.id"
      :id="item.id"
      :title="item.name"
      subtitle=""
      type="inspection"
      @onSelect="onSelect(item)"
    ></ListItem>
    </div>
    <div v-if="isOffline" class="offline">
      Er is momenteel geen lijst beschikbaar
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
      this.offlineItems.push(item)
      console.log(this.offlineItems)

      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('inspections', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }
        this.offlineItems.forEach(item => {
          transaction.objectStore('inspections').put({
            key: item.id,
            name: item.name,
          })
        })
      })
    }
  },
};
</script>
