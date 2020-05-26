<template>
   <div class="fornecedor">
      <h5>Fornecedores</h5>
      <!-- Modal -->
      <!-- IDEA:  Modal grande. -->
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-lg">
            <div class="modal-content">
               
					<div class="modal-header pt-2">
                  <h5 class="modal-title" id="exampleModalLabel">Fornecedor -</h5>
                  <button @click="Canceled" type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
					
					<div class="modal-body pb-0 pt-2">
						<form>
							<div class="form-row">
								<div class="form-group col-md-5">
									<label class="mb-0"  for="inpNome">Nome Produto</label>
									<input v-model="newRecord.nome"
										type="text"
										class="form-control form-control-sm" id="inpNome" placeholder="">
								</div>
								<div class="form-group col-md-2">
									<label class="mb-0" for="inpUnidade">Unidade</label>
									<input v-model="newRecord.unidade" 
										type="text" 
										class="form-control form-control-sm" id="inpUnidade" placeholder="">
								</div>
								<div class="form-group col-md-2">
									<label class="mb-0" for="inpUnidade2">Unidade2</label>
									<input v-model="newRecord.unidade" 
										type="text" 
										class="form-control form-control-sm" id="inpUnidade2" placeholder="">
								</div>
							</div>
							<div class="form-row">
								<div class="form-group col-md-2">
									<label class="mb-0" for="inpUnidade2">Unidade2</label>
									<input v-model="newRecord.unidade" 
										type="text" 
										class="form-control form-control-sm" id="inpUnidade2" placeholder="">
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
      <!-- <form>
         <div class="form-row">
            <div class="form-group col-md-6">
               <label class="mb-0"  for="inputEmail4">Nome</label>
               <input type="text" class="form-control" id="inputEmail4" placeholder="">
            </div>
            <div class="form-group col-md-6">
               <label class="mb-0" for="inputPassword4">Contato</label>
               <input type="text" class="form-control" id="inputPassword4" placeholder="">
            </div>
         </div>
         <div class="form-row">
            <div class="form-group col-md-6">
               <label  class="mb-0" for="inputCity">Endereço</label>
               <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
               <label  class="mb-0" for="inputState">Cidade</label>
               <select id="inputState" class="form-control">
               <option selected>Selecione...</option>
               <option>Ubajara</option>
               <option>Tianguá</option>
               </select>
            </div>
            <div class="form-group col-md-2">
               <div class="form-check mt-4">
                  <input class="form-check-input" type="checkbox" id="gridCheck">
                  <label class="form-check-label" for="gridCheck">
                     Ativo
                  </label>
               </div>
            </div>
         </div>
         <div class="form-group">
         </div>
         <button type="button" class="btn btn-sm mr-2 btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Add</button>
         <button type="submit" class="btn btn-sm mr-2 btn-primary">Novo</button>
         <button type="submit" class="btn btn-sm mr-2 btn-primary">Editar</button>
         <button type="submit" class="btn btn-sm btn-primary">Salvar</button>
      </form>      
      <hr> -->
      <div class="box-tabela">  
         <!-- Tabela -->
         <table class="tabela table table-sm table-borderless">
            <thead>
               <tr>
                  <th style="width: 5em; padding-left:2px;">#</th>
                  <th style="width: 40em; padding-left:0;">Fornecedores</th>
                  <th style="width: 50em; padding-left:0;">Contato</th>
                  <th style="width: 30em; padding-left:0;">Tipo Contato</th>
                  <th style="width: 30em; padding-left:0;">Endereço</th>
                  <th id="tabela-th--isHover" style="width: 10%;">
							<pencil-plus class="icon-2x" title="Novo Fornecedor"
								@click="AddEdit(fornecedor,'create')"
								data-toggle="modal" data-target=".bd-example-modal-lg"/>
						</th>
               </tr>
            </thead>
            <tbody>
              <tr :class="{ AtivoStyle: isAtivo == fornecedor.id }"
						@click="Ativo(fornecedor)"
						v-for="fornecedor in fornecedores.results" v-bind:key="fornecedor.id">

						<td>{{ fornecedor.id }}</td>
						<td>{{ fornecedor.nome }}</td>
						<td>{{ fornecedor.celular }}</td>
						<td>{{ fornecedor.tipo_contato }}</td>
						<td>{{ fornecedor.endereco }}</td>
						<!-- <td><a :href="produto.url"> {{ produto.id }} </a> </td> -->
						<td id="td-ctl">
							<div id="btn-ctl">
								<!-- <div class="mr-2"  v-if="isAtivo == produto.id"
									@click="AddEdit(produto,'create')"
									data-toggle="modal" data-target="#modalExemplo">
									<pencil-plus class="icon-2x" title="Novo Produto"/>
								</div>  -->
								<div class="mr-2" v-if="isAtivo == fornecedor.id"
									@click="AddEdit(fornecedor,'edit')"
									data-toggle="modal" data-target="#modalExemplo">
									<pencil-icon class="icon-2x" title="Editar"/>
								</div>
								<div class="mr-1" v-if="isAtivo == fornecedor.id"
									@click="AddEdit(fornecedor,'delete')">
									<delete-icon class="icon-2x" title="Apagar"/>
								</div>
							</div>
						</td>
					</tr>
                 
              <!-- <tr> <td>01</td> <td>Geovane Lima</td> <td>88 99998-5584, 99997-6597 WhatsApp</td> <td>Sítio Itaperacema</td>
               </tr>
               <tr> <td>01</td> <td>Geovane Lima</td> <td>88 99997-5585, 99992-6598 WhatsApp</td> <td>Sítio Itaperacema</td> -->
               <!-- Botões de CRUD -->
						<!-- <td id="td-ctl">
							<div id="btn-ctl"> -->
								<!-- <div class="mr-2">
									<pencil-plus class="icon-2x"/>
								</div>  -->
								<!-- <div class="mr-2">
									<pencil-icon class="icon-2x"/>
								</div>
								<div class="mr-1">
									<delete-icon class="icon-2x"/>
								</div>
							</div>
						</td> 
               </tr> -->
               
            </tbody>
         </table>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
   name: 'Fornecedor',
	data() {
		return {
         url: '/fornecedores',
         isAtivo: 0,
			titulo: '',
         Acao: '',
         oldRecord: {},
			newRecord: {}
		}
	},
	mounted () {
		this.$store.dispatch('fornecedores/getAll', {"url": this.url})
	},

	computed: mapState({
		fornecedores: state => state.fornecedores.all
	}),

	methods: {
      Canceled () {
			this.newRecord.nome = this.oldRecord.nome 
			this.newRecord.celular = this.oldRecord.celular
			this.newRecord.tipo_contato = this.oldRecord.tipo_contato
			this.newRecord.endereco = this.oldRecord.endereco
      },
      
		AddEdit (Record, acao) {
         var nRecord = {
            nome:'',
            celular:'',
            tipo_contato:'',
            endereco: '',
            data_joined: ''
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
						this.$store.dispatch('fornecedores/deleteRecord',
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
					this.$store.dispatch('fornecedores/createRecord',
						{
							"url": this.url,
							"data": Record
						}
					)			
					break
				case 'edit':
					this.$store.dispatch('fornecedores/updateRecord',
						{
							"url": this.url,
							"data": Record
						}
					)
					break
				case 'delete':
					this.$store.dispatch('fornecedores/deleteRecord',
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
		// 		this.$store.dispatch('Fornecedores/getAll',{'url':''})
		// 	}
		// },

	}
}
</script>

<style scoped>
   .form-group {
      margin-bottom: .3em;
   }
   .form-control {
      background-color: #fff;
   }
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
	}

	#tabela-th--isHover .icon-2x {
		top: 2px;
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
      
</style>