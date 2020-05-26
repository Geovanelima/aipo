<template>
	<div class="produtos">
		<produto-lista/>
		<!-- <button
			class="btn btn-outline-success mr-2 mb-2"
			@click="getProdutos">Abrir Produtos
		</button> -->
	</div>
</template>

<script>
// @ is an alias to /src 
import ProdutoLista from '@/components/Produto.vue'

export default {
	name: 'Produtos',
	components: {
	ProdutoLista
	}

   // mounted () {
	// 	this.$store.dispatch('produtos/getAll',{'url':'/produtos'})
	// },
	// computed: {},
	// watch: {},
	// methods: {}
}
</script>

<style lang="scss" scoped>
	h4 {
		color: rgb(42, 134, 240);
	}
</style>
