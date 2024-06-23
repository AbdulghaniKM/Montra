import { createRouter, createWebHistory } from 'vue-router';
import Form from './components/Form.vue';
import Boarding from './components/Boarding.vue';

const routes = [
    { path: '/', name: 'Form', component: Form },
    {
        path: '/boarding',
        name: 'Boarding',
        component: Boarding,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
