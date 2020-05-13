import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../components/Users.vue';
import UserFull from '../components/UserFull.vue';

Vue.use(VueRouter)

const routes = [
{
	path: '/',
	name: 'Users',
	component: Users,
}, {
	path: '/:login',
	name: 'User',
	component: UserFull,
	meta: {
        title: ''
	},
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router