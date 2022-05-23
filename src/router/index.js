import { createRouter, createWebHistory } from 'vue-router'

import showInspections from '@/views/InspectionsView.vue'
import Customers from '@/views/CustomersView.vue'
import singleInspection from '@/views/InspectionView.vue'

const routes = [
    {path: '/', name: 'Inspections', component: showInspections},
    {path: '/customers', name: 'Customers', component: Customers},
    {path: '/inspection/:id', name: 'Inspection', component: singleInspection},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router