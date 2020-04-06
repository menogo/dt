import Vue from 'vue';
import VueRouter from 'vue-router';
import New from '../views/New.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'New',
        component: New,
    },
    {
        path: '/old',
        name: 'Old',
        // route level code-splitting
        // this generates a separate chunk (old.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "old" */ '../views/Old.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
