import services from 'services'
export default {
	namespaced: true,
	state: {
		// token: localStorage.getItem('user-token') || '',
		token: '',
		fullName: ''
	},

	mutations: {
		LOGIN(state, authentic) {
			state.token = authentic.token,
			state.fullName = authentic.full_name
		}
	},

	actions: {
		getAuth ({ commit }, playload) {
			services.getLogin(playload)
			.then(res => {
				// window.console.log('Pass-1, '+JSON.stringify(res))
				commit('LOGIN', res.data)
			})
		},
	},

	getters: {
		isAuthenticated: state => !!state.token,
		fullName: state => state.fullName,
		token: state => 'Token ' + state.token
	}
}
