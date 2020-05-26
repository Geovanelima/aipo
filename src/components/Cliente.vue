<template>
   <div class="cliente">
      <h5>Clientes</h5>
		<!--Box e Tabela -->
		<div class="box-tabela">  
			<table class="tabela table table-sm table-borderless">
				<thead>
					<tr>
						<th style="width: 5em; padding-left:2px;">#</th>
						<th style="width: 40em; padding-left:0;">Clientes</th>
						<th style="width: 25em; padding-left:0;">Contato</th>
						<th style="width: 50em; padding-left:0;">Celular</th>
						<th style="width: 15em; padding-left:0;">Cidade</th>
						<th style="width: 10em; padding-left:0;">UF</th>
						<th id="tabela-th--isHover" style="width: 10%;">
							<div id="btn-ctl">
								<pencil-plus class="icon-2x" title="Novo Cliente"
									@click="AddEdit(cliente,'create')"
									data-toggle="modal" data-target="#modalExemplo"/>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr :class="{ AtivoStyle: isAtivo == cliente.id }"
						@click="Ativo(cliente)"
						v-for="cliente in clientes.results" v-bind:key="cliente.id">

						<td>{{ cliente.id }}</td>
						<td>{{ cliente.nome_fantasia }}</td>
						<td>{{ cliente.tipo_contato }}</td>
						<td>{{ cliente.celular }}</td>
						<td>{{ cliente.cidade }}</td>
						<td>{{ cliente.uf }}</td>
						<!-- <td><a :href="cliente.url"> {{ cliente.id }} </a> </td> -->
						<td id="td-ctl">
							<div id="btn-ctl">
								<div class="mr-2" v-if="isAtivo == cliente.id"
									@click="AddEdit(cliente,'edit')"
									data-toggle="modal" data-target="#modalExemplo">
									<pencil-icon class="icon-2x" title="Editar"/>
								</div>
								<div class="mr-1" v-if="isAtivo == cliente.id"
									@click="AddEdit(cliente,'delete')">
									<delete-icon class="icon-2x" title="Apagar"/>
								</div>
							</div>
						</td>
					</tr>
					

					
					<!-- <tr>
						<td>01</td>
						<td>Supermercado Ltda</td>
						<td>Fulano Souza</td>
						<td>88 99990-5584, 99999-6597</td>
						<td>Tianguá</td>
						<td>CE</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Frangolândia Ltda</td>
						<td>Fulano Souza</td>
						<td>88 99990-5584, 99999-6597</td>
						<td>Tianguá</td>
						<td>CE</td> -->
						<!-- Botões de CRUD -->
						<!-- <td id="td-ctl">
							<div id="btn-ctl">
								<div class="mr-2">
									<pencil-plus class="icon-2x"/>
								</div> 
								<div class="mr-2">
									<pencil-icon class="icon-2x"/>
								</div>
								<div class="mr-1">
									<delete-icon class="icon-2x"/>
								</div>
							</div>
						</td>  -->
												
						<!-- <td id="td-ctl">
							<div id="btn-ctl">
								<div class="mr-2"  v-if="isAtivo == produto.id"
									@click="AddEdit(produto,'create')"
									data-toggle="modal" data-target="#modalExemplo">
									<PencilPlus class="icon-2x"/>
								</div> 
								<div class="mr-2" v-if="isAtivo == produto.id"
									@click="AddEdit(produto,'edit')"
									data-toggle="modal" data-target="#modalExemplo">
									<Pencil class="icon-2x"/>
								</div>
								<div class="mr-1" v-if="isAtivo == produto.id"
									@click="AddEdit(produto,'delete')">
									<Delete class="icon-2x"/>
								</div>
							</div>
						</td>  -->

					<!-- </tr>	 -->
				</tbody>
			</table>
		</div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
   name: 'Cliente',
	data() {
		return {
         url: '/clientes',
         isAtivo: 0,
			titulo: '',
			Acao: '',
			newRecord: {},
		}
	},
	mounted () {
		this.$store.dispatch('clientes/getAll', {"url": this.url})
	},

	computed: mapState({
		clientes: state => state.clientes.all
	}),

	methods: {
		AddEdit (Record, acao) {
         var nRecord = {
            nome_fantasia:'',
            celular:'',
            tipo_contato:'',
				cidade: '',
				uf: '',
            email: ''
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
					this.newRecord = Record
					break
				case 'delete':
					this.Acao = 'delete'
					if (confirm('Deletar?, Item: '+Record.id+' - '+Record.nome)) {
						this.$store.dispatch('clientes/deleteRecord',
							{
								"url": this.url,
                        "data": Record
							}
						)						
					}
			}
		},
		//TODO: Implementar ação fechar, Objeto voltar estado original.
		Save (Record) {
			switch (this.Acao) {
				case 'create':
					this.$store.dispatch('clientes/createRecord',
						{
							"url": this.url,
							"data": Record
						}
					)			
					break
				case 'edit':
					this.$store.dispatch('clientes/updateRecord',
						{
							"url": this.url,
							"data": Record
						}
					)
					break
				case 'delete':
					this.$store.dispatch('clientes/deleteRecord',
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
		// 		this.$store.dispatch('clientes/getAll',{'url':''})
		// 	}
		// }
	}
}
</script>

<style>
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

</style>