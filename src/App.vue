<template>
  <main id="app">
		<!-- Header -->
		<header class="navbar fixed-top bg-dark text-primary">Aipo - Hortaliças
			<div> {{ fullName }} 
				<account-check v-if="isAuthenticated"/>
			</div>
		</header>

		<!-- Navegação -->
		<nav>
			<div class="navsHeader">
				<router-link class="hItems hIconHome" to="/">
					<view-dashboard class="icon-2x"/>
				</router-link>
				<router-link class="hItems hText" to="/">Dashboard</router-link>
				<!-- <div class="hItems hIconMenu">
					<menu-icon class="icon-2x" />
				</div> -->
			</div>
			<hr/>
			<div aria-disabled="true" class="navs">
				<!-- Menu Icons -->
				<div id="navsIcon">
					<router-link class="navsItems" 
						:to="{name: 'Login'}">
						<account-lock-outline class="icon-2x" />
					</router-link>
					<router-link class="navsItems iTest" :to="{name: 'Produtos'}">
						<food-apple-outline title="Cadastro de Produto" class="icon-2x" />
					</router-link>
					<router-link class="navsItems" to="/fornecedores">
						<account-multiple class="icon-2x" />
					</router-link>
					<router-link class="navsItems" to="/clientes">
						<account-tie class="icon-2x" />
					</router-link>
					<router-link class="navsItems" to="/pedidos">
						<text-box-outline class="icon-2x" />
					</router-link>
					<router-link class="navsItems" to="/coletas">
						<truck-delivery-outline class="icon-2x" />
					</router-link>
					<router-link class="navsItems iTest" to="/pagamentos">
						<account-cash class="icon-2x" />
					</router-link>
					<router-link class="navsItems" to="/counter/1/2">
						<account-cash class="icon-2x" title="Contas a Receber"/>
					</router-link>
				</div>
				<!-- Menu Testo -->
				<div id="navsText">
					<div class="navsItems">
						<router-link :to="{name: 'Login'}">Entrar</router-link>
					</div>
					<div class="navsItems iTest">
						<router-link to="/produtos">Produtos</router-link>
					</div>
					<div class="navsItems">
						<router-link to="/fornecedores">Fornecedores</router-link>
					</div>
					<div class="navsItems">
						<router-link to="/clientes">Clientes</router-link>
					</div>
					<div class="navsItems">
						<router-link to="/pedidos">Pedidos</router-link>
					</div>
					<div class="navsItems">
						<router-link to="/coletas">Coletas</router-link>
					</div>
					<div class="navsItems iTest">
						<router-link to="/pagamentos">Pagar</router-link>
					</div>
					<div class="navsItems">
						<router-link to="/counter/1/2">Receber</router-link>
					</div>
				</div>
			</div>
		</nav>

		<!-- Content -->
		<div id="main-view">
			<router-view/>
		</div>

		<!-- Barra Footer -->
		<footer>
			<div class="doost">
				<a href="http://vdoost.com" target="_blank">
					&copy; Doost
					<span>Me.</span>
				</a>
			</div>
		</footer>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters("auth", ['fullName', "isAuthenticated"])
	}
};
</script>

<style>

html, body {margin: 0; height: 100%;}

#main-view {
	/* border: solid 1px green; */
	position: absolute;
	top: 0;
	height: 100%;
	height: calc(100% - 40px);
	width: 100%;
	overflow: auto;
	padding-top: 40px;
}

@font-face {
  font-family: "Ubuntu";
  src: url("./assets/Ubuntu-Regular.ttf");
}


/* Barra rolagem da nav */
#main-view::-webkit-scrollbar {
  width: 6px;
  height: 6px; 
}
/* Cor fundo da barra */
#main-view::-webkit-scrollbar-track {
  background: var(--base-color);
}
#main-view::-webkit-scrollbar-thumb {
  background: #32344b;
}

.material-design-icon.icon-2x {
  height: 24px;
  width: 24px;
}
.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 24px;
  width: 24px;
}
</style>

<style lang="scss" scoped>

.navsHeader a.router-link-exact-active {
  color: #42b983;
}
#navsIcon a.router-link-exact-active {
  color: #42b983;
}
#navsText .navsItems a.router-link-exact-active {
  color: #42b983;
}

a:link,
a:visited {
  text-decoration: none;
  color: darkslateblue;
}
a:hover {
  text-decoration: none;
  color: rebeccapurple;
}
a:active {
  color: tomato;
}

/* Barra rolagem da nav */
nav::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
nav::-webkit-scrollbar-track {
  background: grey;
}
nav::-webkit-scrollbar-thumb {
  background: dimgray;
}

/* Bara de Navegação */
nav {
	background-color: gray; // gray; $success-text; 
	position: fixed;
	border-radius: 0 0 5px 0px;
	padding-top: 41px;
	width: 175px;
	height: 100%;
	overflow: auto;
	z-index: 1;
}
.navsHeader {
  /* border: solid 1px darkslateblue; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 150px;
  height: 50px;
  padding: 5px;
}
.hItems {
  /* border: solid 1px darkslateblue; */
  padding-left: 15px;
}
.hText {
  margin-right: 30px;
}

hr {
  margin: 0 5px 0 5px;
  -webkit-border-before-color: darkslateblue;
}
.navs {
  display: flex;
}
#navsIcon {
  // border: solid 1px darkslateblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  margin-left: 10px;
}

.navsItems {
  // border: solid 1px darkslateblue;
  padding: 5px;
  margin: 5px;
  height: 36px;
}
// .iTest {
//     border: solid 1px darkslateblue;
// }

#navsText {
  // border: solid 1px darkslateblue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 120px;
}

#main-view {
	padding-left: 180px;
	color: rgb(84, 70, 173);
}

/* Footer */
footer {
  bottom: 0;
  position: fixed;
  background-color: rgb(40, 33, 80);
  color: slategrey;
  // color: $info-text;
  width: 100%;
  height: 40px;
  /* text-align: center; */
  padding-left: 10px;
  padding-top: 10px;
  z-index: 1;
}
.doost {
  text-align: end;
  margin-right: 10px;
  font-size: 15px;
  font-family: "Ubuntu", sans-serif;
}
.doost span {
  font-size: 12px;
}

/* Reposivo para telas Menores */
@media screen and (max-width: 992px) {
  nav {
    width: 70px;
  }
  .navsHeader {
    margin-left: 5px;
    width: 60px;
  }
  .hText,
  .hIconMenu {
    display: none;
  }

  .navs {
    display: inline;
  }
  #navsIcon {
    margin-left: 15px;
  }
  #navsText {
    display: none;
  }
  #main-view {
	padding-left: 75px;
  }
//   footer {
//     visibility: collapse;
//   }
}
</style>    
