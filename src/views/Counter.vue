<template>
	<div class="counter-views">
		<DataTable msg="vue" />
		<br />
		<!-- {{id}} {{age}} -->
		<counter></counter>
		<hr>
		<ul>
			<li v-for="produto in produtos.results" :key=produto.id>
				{{ produto.nome }}
			</li>
		</ul>
	</div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import DataTable from "@/components/DataTable.vue";
import { mapState } from 'vuex'
export default {
	name: "Contador",
	props: [
		'id',
		'age'
	],
	components: {
		Counter,
		DataTable
	},
	computed: mapState({
		produtos: state => state.produtos.all
	}),
	
	methods: {},
	created () {
		this.$store.dispatch('produtos/getAll',{'url':'/produtos'})
	}
};
</script>