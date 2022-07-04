<template>
  <div v-if="!isOffline" class="online">
    <form @submit.prevent="updateCustomer">
      <label>Naam:</label>
      <input type="text" v-model="customer.name">
      <label>Adres:</label>
      <input type="text" v-model="customer.address">
      <label>Stad:</label>
      <input type="text" v-model="customer.city">
      <label>Land:</label>
      <input type="text" v-model="customer.country">
      <button class="scrum-btn vertical-center">
        <Icon class="icon" :icon="icons.save24Regular" />
      </button>
    </form>
  </div>
  <div v-if="isOffline" class="offline">
    <form @submit.prevent="updateCustomer">
      <label>Naam:</label>
      <input type="text" v-model="localCustomer.name">
      <label>Adres:</label>
      <input type="text" v-model="localCustomer.address">
      <label>Stad:</label>
      <input type="text" v-model="localCustomer.city">
      <label>Land:</label>
      <input type="text" v-model="localCustomer.country">
      <button class="scrum-btn vertical-center">
        <Icon class="icon" :icon="icons.save24Regular" />
      </button>
    </form>
  </div>
</template>

<script>
import Scrum from "../components/ScrumComp.vue";
import BtnComp from "../components/BtnComp.vue"
import axios from "axios";

import { Icon } from '@iconify/vue';
import save24Regular from '@iconify-icons/fluent/save-24-regular';

export default {
  name: "CustomerView",
  components: {
    Scrum,
    BtnComp,
    Icon,
  },
  data() {
    return {
      isOffline: !navigator.onLine,
      id: this.$route.params.customer_id,
      localCustomer: {
        name: "",
        address: "",
        city: "",
        country: "",
      },
      customer: {
        name: "John",
        address: "",
        city: "",
        country: "",
      },
      icons: {
        save24Regular,
      },
    };
  },

  props: {
    getDatabase: { type: Function },
  },

  async created() {
    this.database = await this.getDatabase();
    this.localCustomer = await this.getCustomer();
  },

  mounted() {
    axios
        .get("https://app-api.nettt.nl/api/customer/" + this.id)
        .then(response => (this.customer = response.data.data))

    window.addEventListener("offline", () => {
      this.isOffline = true;
    });
    window.addEventListener("online", () => {
      this.isOffline = false;
    });


  },

  methods: {
    async getCustomer() {
      return new Promise((resolve) => {
        let transaction = this.database.transaction("customers", "readonly");
        let customerRequest = transaction.objectStore("customers").get(this.id);

        customerRequest.onsuccess = e => {
          resolve(e.target.result);
          this.customer.name = customerRequest.name;
        }
      })
    },

    async updateCustomer() {
      axios.put("https://app-api.nettt.nl/api/customer/" + this.id , this.customer)
          .then((response) => console.log(response))
          .catch((error) => console.log(error))

      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('customers', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }

        transaction.objectStore('customers').put({
          key: parseInt(this.id),
          name: this.customer.name,
          address: this.customer.address,
          city: this.customer.city,
          country: this.customer.country,
        })
      })
    }
  },
};
</script>
