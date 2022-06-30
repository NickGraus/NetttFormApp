import { createRouter, createWebHistory } from "vue-router";

import showInspections from "@/views/InspectionsView.vue";
import Customers from "@/views/CustomersView.vue";
import singleInspection from "@/views/InspectionView.vue";
import singleCustomer from "@/views/CustomerView.vue";
import newCustomer from "@/views/CustomerNewView.vue";

const routes = [
  { path: "/", name: "Inspections", component: showInspections },
  { path: "/inspection/:id", name: "Inspection", component: singleInspection },
  { path: "/customers", name: "Customers", component: Customers },
  { path: "/customer/:customer_id", name: "Customer", component: singleCustomer },
  { path: "/customer/new", name: "New customer", component: newCustomer },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
