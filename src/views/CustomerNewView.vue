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
      <Scrum update="update" />
      <button>Create Customer</button>
    </form>
  </div>
</template>

<script>
import Scrum from "../components/ScrumComp.vue";
import axios from 'axios';

export default {
  name: "CustomerNew",
  components: {
    Scrum,
  },
  data() {
    return {
      customer: {
        name: "",
        address: "",
        city: "",
        country: "",
        email: "",
      }
    };
  },
  methods: {
    createCustomer() {
      axios.post("https://app-api.nettt.nl/api/customer", this.customer)
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
    }
  }
};
</script>
