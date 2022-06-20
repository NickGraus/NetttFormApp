<template>
  <div class="customer-new">
    <form @submit.prevent="createCustomer">
      <label for="name">name</label>
      <input type="text" id="name" v-model="customer.name">
      <label for="address">Adres:</label>
      <input type="text" id="address" v-model="customer.address">
      <label for="city">Stad:</label>
      <input type="text" id="city" v-model="customer.city">
      <label for="country">Land:</label>
      <input type="text" id="country" v-model="customer.country">
      <label for="email">E-mail:</label>
      <input type="text" id="email" v-model="customer.email">
      <button class="scrum-btn vertical-center">
        <Icon class="icon" :icon="icons.save24Regular" />
      </button>
    </form>
    <button @click="createCustomer">Save</button>
  </div>
</template>

<script>
import Scrum from "../components/ScrumComp.vue";
import axios from 'axios';

import { Icon } from '@iconify/vue';
import save24Regular from '@iconify-icons/fluent/save-24-regular';
import trashBinOutline from "@iconify-icons/ion/trash-bin-outline";

export default {
  name: "CustomerNew",
  components: {
    Scrum,
    Icon,
  },
  data() {
    return {
      customer: {
        name: "",
        address: "",
        city: "",
        country: "",
        email: "",
      },
      icons: {
        save24Regular,
        trashBinOutline,
      },
    };
  },

  props: {
    getDatabase: { type: Function },
  },

  async created() {
    this.database = await this.getDatabase();
    },

  methods: {
    async createCustomer() {
      return new Promise((resolve, reject) => {
        let countRequest = "";
        let transaction = this.database.transaction('customers', 'readwrite');
        transaction.oncomplete = e => {
          resolve();
        }
        countRequest = transaction.objectStore('customers').count();
        countRequest.onsuccess = () => {
          transaction.objectStore('customers').put({
            key: countRequest.result + 1,
            name: this.customer.name,
            address: this.customer.address,
            city: this.customer.city,
            country: this.customer.country,
            email: this.customer.email,
          })
        }


      })
      // axios.post("https://app-api.nettt.nl/api/customer", this.customer)
      //     .then((response) => console.log(response))
      //     .catch((error) => console.log(error))
    }
  }
};
</script>

<style>
  button {
    border: unset;
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

  .scrum-btn:hover svg {
    color: #fca311;
  }
</style>