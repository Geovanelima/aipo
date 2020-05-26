<template>
   <div class="clientes">
      <cliente-lista/>
   </div>
</template>

<script>
import ClienteLista from "@/components/Cliente.vue";

export default {
   name: 'Clientes',
   components: {
      ClienteLista
   }
   
}
</script>