<template>
   <div class="pedido">
      <h4>Lista de Pedidos</h4>
					<!-- Tabela -->
					<div class="box-tabela">    
						<table class="tabela table table-sm  table-borderless">
							<thead>
								<tr>
									<th style="width: 2em; padding-left:2px;">#</th>
									<th style="width: 30em; padding-left:0;">Nome do Cliente</th>
									<th style="width: 50em; padding-left:0;">Endereço</th>
								</tr>
							</thead>
							<tbody>
								<tr> <td>01</td> <td>Rodrigo</td> <td>33</td>
								</tr>
								<tr> <td>02</td>	<td>Taynara</td> <td>21</td>
								</tr>
								<tr> <td>03</td>	<td>Taynara</td> <td>21</td>
								</tr>
								<tr> <td>04</td>	<td>Taynara</td> <td>21</td>
								</tr>
								<tr> <td>05</td>	<td>Taynara</td> <td>21</td>
								</tr>
								<tr> <td>06</td>	<td>Taynara</td> <td>21</td>
								</tr>
							</tbody>
						</table>
					</div>
      
      
      
      <hr> 
      <ul>
         <li v-for="cliente in clientes.results" :key=cliente.id>
            {{ cliente.nome_fantasia }}, {{ cliente.cidade }} - {{ cliente.uf }}
         </li>
      </ul>
   </div>
</template>

<style scoped>

html, body {margin: 0; height: 100%;}

.box-tabela {
	/* background-color: rgb(216, 158, 158); */
	border-bottom: 1px solid black;
	/* margin-right: 50px; */
	/* margin-left: 50px; */
	/* padding-right: 10px; */
	height: 100%;
	/* height: -webkit-calc(100% - 100px); */
	/* height: -moz-calc(100% - 100px); */
	height: calc(100% - 40px);
	overflow: auto;

	width: 100%;
}
</style>