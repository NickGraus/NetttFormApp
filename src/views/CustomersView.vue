<template>
  <div class="customers">
    <button @click="saveCustomer">Save</button>
    <button @click="syncCustomers">Sync</button>
      <div v-if="!isOffline" class="online">
        <div v-if="customers.length <= 0">
          We couldn't get the customers to load.
        </div>
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
              v-for="customer in localCustomers"
              :key="customer.id"
              :id="customer.id"
              :title="customer.name"
              type="customer"
          >
          </ListItem>
        </div>
        <div v-if="localCustomers.length <= 0">
          We couldn't get the customers to load.
        </div>
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
      customer: [],
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

  computed: {
    filteredCustomers() {
      return this.customers.filter(customer => customer.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  },

  methods: {
    async saveCustomer() {
      axios
          .put("https://app-api.nettt.nl/api/customer/", this.customer)
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('customers', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }

        // console.log(this.customers[122])
        this.customers.forEach(customer => {
          transaction.objectStore('customers').put({
            key: customer.id,
            name: customer.name,
            // address: customer.address,
        })
      })
      })
    },
    async getCustomers() {
      return new Promise((resolve) => {
        let transaction = this.database.transaction("customers", "readonly");
        let customers = transaction.objectStore("customers").getAll();

        customers.onsuccess = e => {
          resolve(e.target.result);
        }
      })
    },
    async syncCustomers() {
      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('customers', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }

        let customers = transaction.objectStore('customers').getAll();

        customers.onsuccess = e => {
          resolve(e.target.result);
        }
      })

      axios
          .put("https://app-api.nettt.nl/api/customer/", this.customers)
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
    }
  },
};
</script>
