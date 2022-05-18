import { createRouter, createWebHistory } from 'vue-router'

import Inspections from '@/views/InspectionsView.vue'
import Customers from '@/views/CustomersView.vue'

const routes = [
    {path: '/', name: 'Inspections', component: Inspections},
    {path: '/customers', name: 'Customers', component: Customers}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router