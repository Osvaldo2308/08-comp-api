<template>
<h1 v-if="!Pokemon && !errorMessage">Buscando...</h1>
<h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    <template v-else>
        <h3>{{ Pokemon.name }}</h3>
        <img :src="Pokemon.sprites.front_default" :alt="Pokemon.name">
        <br>
        <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
    </template>
</template>

<script>
import {watch} from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemon from '@/composables/usePokemon';

export default {
    setup(){
        const route = useRoute()
        //console.log()
        const {errorMessage, isLoading, Pokemon, searchPokemon } = usePokemon(route.params.id)
        
        watch(
        () => route.params.id,
        () => searchPokemon(route.params.id)
            )

            onBeforeRouteLeave(()=>{
                const answer = window.confirm('¿Esta seguro que desea salir?')
                if(!answer) return false
            })


        return{
            errorMessage,
            isLoading,
            Pokemon
        }
    }
}
</script>

