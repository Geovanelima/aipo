import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		// meta: { needGuard: true },
		component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
	},
	{
		path: '/clientes',
		name: 'Clientes',
		meta: { needGuard: true },
		component: () => import(/* webpackChunkName: "clientes" */ '../views/Clientes.vue')
	},

	{
		path: '/fornecedores',
		name: 'Fornecedores',
		meta: { needGuard: true },
		component: () => import(/* webpackChunkName: "fornecedores" */ '../views/Fornecedores.vue')
	},

	{
		path: '/counter/:id/:age',
		name: 'Counter',
		props: true,
		meta: { needGuard: true },
		component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
	},
	{
		path: '/produtos',
		name: 'Produtos',
		meta: { needGuard: true },
		component: () => import(/* webpackChunkName: "produtos" */ '../views/Produtos.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes
})

function guardRoute(to, from, next) {
	var isPerm = store.getters['auth/isAuthenticated']
	// window.console.log('isPerm:' + isPerm + ', de: ' + from.path + ', para: ' + to.path)	
	if (isPerm) {
		next()
		// window.console.log('Permisão!, ' + isPerm)
	} else {
		// window.console.log('else, Negado, ' + isPerm)
		next('/login')
	}
}

router.beforeEach((to, from, next) => {
	if (to.matched.some(m => m.meta.needGuard)) {
		guardRoute(to, from, next)
	} else {
		next()
		if (from.path !== '/login' && !!store.getters['auth/isAuthenticated']) {
			next({ name: 'Home' })
		}
	}
})

export default router