<template>
	<div class="produto">
		<h5>Produtos</h5>
		<!-- Modal -->
		<div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header pt-2">
					<h5 class="modal-title" id="exampleModalLabel">Produto - {{ titulo }}</h5>
					<button @click="Canceled" type="button" class="close" data-dismiss="modal" aria-label="Fechar">
						<span aria-hidden="true">&times;</span>
						<!-- BUG: Alterando objeto, se fechar voltar estado original. -->
					</button>
				</div>
			<div class="modal-body pb-0 pt-2">
					<form>
					<div class="form-row">
						<div class="form-group col-md-10">
							<label class="mb-0"  for="inpNome">Nome Produto</label>
							<input v-model="newRecord.nome"
								type="text"
								class="form-control form-control-sm"
								id="inpNome" placeholder="">
						</div>
						<div class="form-group col-md-2">
							<label class="mb-0" for="inpUnidade">Unidade</label>
							<input v-model="newRecord.unidade" 
								type="text" 
								class="form-control form-control-sm"
								id="inpUnidade" placeholder="">

							<div class="custom-control custom-checkbox mr-sm-2">
								<input v-model="newRecord.is_active"
									type="checkbox" class="custom-control-input" id="customControlAutosizing">
								<label class="custom-control-label" for="customControlAutosizing">Ativo</label>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="modal-footer pt-0 pb-0">
				<button type="button" 
					class="btn btn-sm btn-outline-primary border-0" data-dismiss="modal"
					@click="Save(newRecord)"><check-icon class="icon-2x"/></button>
			</div>
			</div>
		</div>
		</div>

		<!-- Table -->
		<div class="box-tabela">
			<table class="tabela table table-sm table-borderless">
				<!-- <caption style="caption-side: top; padding-left:5px;">Produtos</caption> -->
				<thead>
					<tr>
						<th class="tabela-th" style="width: 10em;">#</th>
						<th class="tabela-th" style="width: 50em;">Produto</th>
						<th class="tabela-th" style="width: 10em;">Unidade</th>
						<th id="tabela-th--isHover" style="width: 25%;">
							<div id="btn-ctl">
								<pencil-plus class="icon-2x" title="Novo Produto"
									@click="AddEdit(produto,'create')"
									data-toggle="modal" data-target="#modalExemplo"/>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr :class="{ AtivoStyle: isAtivo == produto.id }"
						@click="Ativo(produto)"
						v-for="produto in produtos.results" v-bind:key="produto.id">

						<td>{{ produto.id }}</td>
						<td>{{ produto.nome }}</td>
						<td>{{ produto.unidade }}</td>
						<!-- <td><a :href="produto.url"> {{ produto.id }} </a> </td> -->
						<td id="td-ctl">
							<div id="btn-ctl">
								<!-- <div class="mr-2"  v-if="isAtivo == produto.id"
									@click="AddEdit(produto,'create')"
									data-toggle="modal" data-target="#modalExemplo">
									<pencil-plus class="icon-2x" title="Novo Produto"/>
								</div>  -->
								<div class="mr-2" v-if="isAtivo == produto.id"
									@click="AddEdit(produto,'edit')"
									data-toggle="modal" data-target="#modalExemplo">
									<pencil-icon class="icon-2x" title="Editar"/>
								</div>
								<div class="mr-1" v-if="isAtivo == produto.id"
									@click="AddEdit(produto,'delete')">
									<delete-icon class="icon-2x" title="Apagar"/>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- <button class="btn btn-sm btn-outline-secondary mr-2 mb-2"
			@click="pageChange(produtos.previous)">Anterior</button>
		<button class="btn btn-sm btn-outline-secondary mb-2" 
			@click="pageChange(produtos.next)">Próximo</button>
		<hr> -->
					
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name: 'Produto',
	components: {
	},
	data() {
		return {
			url: '/produtos',
			isAtivo: 0,
			titulo: '',
			Acao: '',
			newRecord: {},
			oldRecord: {}
		}
	},
	mounted () {
		this.$store.dispatch('produtos/getAll', {"url": this.url})
	},

	computed: mapState({
		produtos: state => state.produtos.all
	}),

	methods: {
		Canceled () {
			this.newRecord.nome = this.oldRecord.nome 
			this.newRecord.unidade = this.oldRecord.unidade
			this.newRecord.is_active = this.oldRecord.is_active
		},

		AddEdit (Record, acao) {
			var nRecord = {
				nome:'',
				unidade:'',
				is_active: ''
			}	
			switch (acao) {
				case 'create':
					this.Acao = 'create'
					this.titulo = 'Novo'
					this.newRecord = nRecord
					break
				case 'edit':
					this.Acao = 'edit'
					this.titulo = 'Editar'
					this.oldRecord = JSON.parse(JSON.stringify(Record))
					this.newRecord = Record
					break
				case 'delete':
					this.Acao = 'delete'
					if (confirm('Deletar?, Item: '+Record.id+' - '+Record.nome)) {
						this.$store.dispatch('produtos/deleteRecord',
							{
								"url": this.url,
								"data": Record
							}
						)						
					}
			}
		},
		Save (Record) {
			switch (this.Acao) {
				case 'create':
					this.$store.dispatch('produtos/createRecord',
						{
							"url": this.url,
							"data": Record
						}
					)			
					break
				case 'edit':
					this.$store.dispatch('produtos/updateRecord',
						{
							"url": this.url,
							"data": Record
						}
					)
					break
				case 'delete':
					this.$store.dispatch('produtos/deleteRecord',
						{
							"url": this.url,
							"data": Record
						}
					)
			}
		},

		Ativo: function(Record) {
			this.isAtivo = Record.id
		},

		//TODO: Implementar paginação.
		// pageChange(url) {	
		// 	if (url !== null) { 
		// 		this.$store.dispatch('pageChange',url)
		// 		this.$store.dispatch('produtos/getAll',{'url':''})
		// 	}
		// },

		updateMessage (e) {
			this.$store.commit('updateMessage', e.target.value)
		}	
	}
}
</script>

<style scoped>
	html, body {margin: 0; height: 100%;}

	@media screen and (max-width: 992px) {
		.box-tabela {
			width: calc(100% - 80px);
		}
	}

	.AtivoStyle {
		background-color: rgb(113, 133, 80);
	}

	table tr:hover td {
		background-color:rgb(167, 162, 162);
		color:rgb(37, 35, 35);
	}

	.tabela-th {
		padding-left: 0;
	}

	#tabela-th--isHover {
		text-align: end;
		color:rgb(167, 162, 162);
		padding-top: 3px;
	}

	#tabela-th--isHover .icon-2x {
		top: -3px;
	}
	
	#tabela-th--isHover:hover {
		color:rgb(108, 158, 27);
	}

	/* Botões de Controle CRUD */
	#td-ctl {
		width: 100px;
		/* border: solid red 1px; */
	}	
		#btn-ctl {
			display: flex;
			justify-content: flex-end
			/* border: solid yellow 1px; */
		}
		#btn-ctl div {
			height: 20px;
			margin-top: -2px;
			align-items: center;
			/* border: solid green .5px; */
		}

	.table-sm td {
		padding: .1em;
	}

</style>