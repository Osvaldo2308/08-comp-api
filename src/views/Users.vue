<template>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <user-list 
        :users="users"
        v-slot="{user}"
        >
        <h5 class="center">{{ user.first_name }} {{ user.last_name }}</h5>
        <span class="center">{{ user.email }}</span>
    </user-list>
    </div>
    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span>Pagina : {{ currentPage }}</span>
</template>

<script>
//import axios from 'axios';
//import { ref } from 'vue';

import useUsers from '@/composables/useUsers'
import UserList from '@/components/UserList.vue'
export default {
    components:{ UserList},
setup() {
    const{
        isLoading,
        errorMessage,
        users,
        prevPage,
        nextPage,
        currentPage
    } = useUsers()

    return{
        isLoading,
        errorMessage,
        users,
        prevPage,
        nextPage,
        currentPage,
        //...UseUsers()
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    width: 100%;
}
div{
    display: flex;
    justify-content: center;
    text-align: center;
}
ul{
    width: 250px;
}
.center {
    text-align: center;
    
    color: black;
}
</style>