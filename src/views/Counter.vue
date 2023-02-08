<template>
    <h1>Counter View</h1>
    <h2>{{ counter }}</h2>

    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Counter',
    props: {},
    emits:[],
    setup() {

        const counter = ref(5)
            /* const increase = ()=>{
                counter.value++
            }
            const decrease = ()=>{
                counter.value--
            } */
        return{
            counter,

            increase: ()=> counter.value++,
            decrease: ()=>counter.value--
        }
    },
}
</script>

<style>

</style>