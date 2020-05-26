<template>
   <div class="fornecedores">
      <fornecedor-lista/>
   </div>
</template>

<script>
import FornecedorLista from "@/components/Fornecedor.vue"

export default {
   name: 'Fornecedores',
   components: {
      FornecedorLista
   }
}
</script>