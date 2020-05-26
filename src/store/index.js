import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'

import produtos from './modules/produtos'
import fornecedores from './modules/fornecedores'
import clientes from './modules/clientes'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
		
export default new Vuex.Store({
	state: {
		baseUrl: 'http://192.168.3.216:8081',
		// baseUrl: 'https://192.168.3.216/api-v1',
		pageUrl: '',
		// userToken: ''
	},

	mutations,
	actions,
	getters,
	modules: {
		auth,
		produtos,
		fornecedores,
		clientes
	}
})