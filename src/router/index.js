import { createRouter, createWebHistory } from 'vue-router'

import Inspections from '@/views/InspectionsView.vue'
import Customers from '@/views/CustomersView.vue'
import Inspection from '@/views/InspectionView.vue'

const routes = [
    {path: '/', name: 'Inspections', component: Inspections},
    {path: '/customers', name: 'Customers', component: Customers},
    {path: '/inspection', name: 'Customers', component: Inspection},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router