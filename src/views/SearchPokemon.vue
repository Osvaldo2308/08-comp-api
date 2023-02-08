<template>
<h1>Buscar Pokemon: {{ pokemonId}}</h1>
<form @submit.prevent="onSubmit">
    <input
    id="nam" 
    type="number"
    placeholder="Número del Pokemon"
    v-model="pokemonId"
    ref="txtSearchId"
    >
</form>
<br>
<span>Presione Enter para buscar</span>
</template>

<script>
import { ref, onActivated} from 'vue';
import { useRouter } from 'vue-router';

export default {
setup(){
        const router = useRouter()
        const pokemonId = ref (1)
        const txtSearchId = ref()

        onActivated(()=>{
            txtSearchId.value.focus()
        })

        return{
            pokemonId,
            txtSearchId,
            onSubmit:()=>{
                /* console.log('pokemon a buscar: ', pokemonId.value) */
                router.push({name: 'pokemon-id', params: {id: pokemonId.value}})
            }
        }
    }
}
</script>
