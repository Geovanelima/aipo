<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="getAuth">
      <img class="mb-4" src="../assets/bootstrap-solid.svg" alt width="72" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Faça login</h1>

      <label for="inputUsername" class="sr-only">Nome de Usuário</label>
      <input
			v-model="username"
			type="username"
			id="inputUsername"
			class="form-control mb-1"
			placeholder="Usuário"
      />

      <label for="inputPassword" class="sr-only">Senha</label>
      <input
			v-model="password"
			type="password"
			id="inputPassword"
			class="form-control"
			placeholder="Senha"
			required aria-selected=""
      />

		<div class="checkbox mb-3">
			<label>
				<input type="checkbox" value="remember-me" /> Lembrar de mim
			</label>
		</div>
      <button class="btn btn-lg btn-primary btn-inline">Login</button>
		<p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Login",
	data() {
		return {
			username: 'admin',
			password: '123456',
		};
	},

	computed: {
		...mapGetters(['baseUrl']),
	},

	methods: {
		...mapActions({
			login: 'auth/login'
		}),

		getAuth () {
			const { username , password } = this
			this.$store.dispatch('auth/getAuth',
				{
					"url": '/login',
					"data": { username, password }
				}
			).then(() => {
				this.$router.push({ name: "Home" })
			})
		},

		// async getLogin() {
		// 	try {
		// 	const { username , password } = this
		// 	const response = await axios({
		// 		method: 'post',
		// 		url: this.baseUrl+'/login',
		// 		data: { username,	password	}
		// 	});
		// 	this.login(response.data);
		// 	localStorage.setItem('user-token',response.data.token)
		// 	this.$router.push({ name: "Home" }, () => {});
		// 	} catch (error) {
		// 		window.console.error("Error: " + error);
		// 	}
		// }
	}
};
</script>

<style scoped>
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.text-center {
  margin-top: 5%;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>