<template>
  <div class="customers">
    <button @click="saveCustomer">Save</button>
    <ListItem
      v-for="customer in customers.slice(0,10)"
      :key="customer.id"
      :id="customer.id"
      :title="customer.name"
      type="customer"
    ></ListItem>
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
      database: null,
    };
  },
  props: {
    getDatabase: { type: Function },
  },

  async created() {
    this.database = await this.getDatabase();
  },
  mounted() {
    axios
        .get("https://app-api.nettt.nl/api/customer")
        .then(response => (this.customers = response.data.data))

    // fetch("https://app-api.nettt.nl/api/customer")
    //   .then((res) => res.json())
    //   .then((data) => (this.customers = data.data))
    //   .then(console.log(this.customers))
    //   .catch((err) => console.log(err.message));
  },
  methods: {
    // async saveCustomersLocal(db) {
    //   var tx = db.transaction("customers", "readwrite");
    //   var store = tx.objectStore("customers")
    //   var item = {
    //     name: "hello",
    //     price: 5,
    //     disc: "there",
    //   };
    //   store.add(item);
    //   return tx.complete;
    // },
    async saveCustomer() {
      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('customers', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }

        transaction.objectStore('customers').add({
          key: customer.id,
          name: customer.name,
          address: customer.address,
          city: customer.city,
          country: customer.country,
          email: customer.email,
        })
      })
    }
    // async saveValues() {
    //   // eslint-disable-next-line no-unused-vars
    //   return new Promise((resolve, reject) => {
    //     let transaction = this.database.transaction("customers", "readwrite");
    //     // eslint-disable-next-line no-unused-vars
    //     transaction.oncomplete = e => {
    //       resolve();
    //     }
    //     this.customers.forEach(customer => {
    //       transaction.objectStore("customers").add({
    //         key: customer.id,
    //         name: customer.name,
    //         address: customer.address,
    //         city: customer.city,
    //         country: customer.country,
    //         email: customer.email,
    //       })
    //     })
    //   })
    // }
  },
};
</script>
