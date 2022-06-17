<template>
  <div class="customers">
<!--    <button @click="saveCustomer">Save</button>-->
      <div v-if="!isOffline" class="online">
        <ListItem
            v-for="customer in customers"
            :key="customer.id"
            :id="customer.id"
            :title="customer.name"
            type="customer"
        ></ListItem>
      </div>
      <div v-if="isOffline" class="offline">
        <div v-if="localCustomers.length > 0" class="list">
          <ListItem
              v-for="customer in localCustomers.slice(0, 0)"
              :key="customer.id"
              :id="customer.id"
              :title="customer.name"
              type="customer"
          >
          </ListItem>
        </div>
        <div v-else class="note">Het was niet mogelijk om de data offline weer te geven</div>
      </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItemComp";
import axios from 'axios';

export default {
  name: "InspectionView",
  components: {
    ListItem,
  },
  data() {
    return {
      customers: [],
      localCustomers: [],
      database: null,
      isOffline: !navigator.onLine
    };
  },
  props: {
    getDatabase: { type: Function },
  },

  async created() {
    this.database = await this.getDatabase();
    this.localCustomers = await this.getCustomers();
  },

   mounted() {
    axios
        .get("https://app-api.nettt.nl/api/customer")
        .then(response => (this.customers = response.data.data))

    window.addEventListener("offline", () => {
      this.isOffline = true;
    });
    window.addEventListener("online", () => {
      this.isOffline = false;
    });
  },

  methods: {
    async saveCustomer() {
      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('customers', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }
        this.customers.forEach(customer => {
          transaction.objectStore('customers').add({
            key: customer.id,
            name: customer.name,
        })
        })
      })
    },
    async getCustomers() {
      return new Promise((resolve) => {
        let transaction = this.database.transaction("customers", "readonly");
        let customerStore = transaction.objectStore("customers")
        let customers = customerStore.getAll();

        customers.onsuccess = e => {
          resolve(e.target.result);
        }
      })
    },
  },
};
</script>
