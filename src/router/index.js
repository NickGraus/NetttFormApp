import { createRouter, createWebHistory } from "vue-router";

import showInspections from "@/views/InspectionsView.vue";
import Customers from "@/views/CustomersView.vue";
import singleInspection from "@/views/InspectionView.vue";
import singleCustomer from "@/views/CustomerView.vue";

const routes = [
  { path: "/", name: "Inspections", component: showInspections },
  { path: "/inspection/:id", name: "Inspection", component: singleInspection },
  { path: "/customer", name: "Customers", component: Customers },
  { path: "/customer/:id", name: "Customer", component: singleCustomer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
