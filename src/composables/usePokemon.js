import axios from "axios"
import { ref } from "vue"

const usePokemon = (pokemonId = '1') =>{
    const Pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

const searchPokemon = async( id ) =>{
    
    if( !id ) return
    
    isLoading.value = true
    Pokemon.value = null
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }` ) 
        Pokemon.value = data
        errorMessage.value = null

        //console.log(data)
        
    } catch (error) {
        errorMessage.value = 'No se pudo encontrar el pokemon con el Id solicitado'
    }

    isLoading.value = false
}
        searchPokemon( pokemonId)
    return{
        errorMessage,
        isLoading,
        Pokemon,
        searchPokemon
    }
}

export default usePokemon