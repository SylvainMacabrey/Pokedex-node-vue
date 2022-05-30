import { ref } from "vue";
import router from "../router/index.js"
import axios from 'axios';
import authHeader from '@/auth-header';

export default function usePokemons() {

    const namePokemon = ref('');
    const pokemon = ref('');
    const pokemons = ref([]);
    const errorsPokemon = ref([]);
    const url = "http://localhost:3000";

    const getPokemon = async (id) => {
        let response = await axios.get(`${url}/api/pokemons/` + id, { headers: authHeader() });
        pokemon.value = response.data.data;
    }

    const getPokemons = async () => {
        let response = await axios.get(`${url}/api/pokemons?name=${namePokemon.value}`, { headers: authHeader() });
        pokemons.value = response.data.data;
    }

    const createPokemon = async (data) => {
        try {
            await axios.post(`${url}/api/pokemons`, data, { headers: authHeader() });
            await router.push({name: 'pokemons.index'});
        } catch (error) {
            let errorResponce = error.response.data.data.errors;
            errorsPokemon.value = errorResponce;
        }
    }

    const updatePokemon = async (id) => {
        try {
            await axios.put(`${url}/api/pokemons/` + id, pokemon.value, { headers: authHeader() });
            await router.push({name: 'pokemons.index'});
        } catch (error) {
            let errorResponce = error.response.data.data.errors;
            errorsPokemon.value = errorResponce;
        }
    }

    const destroyPokemon = async (id) => {
        if(!window.confirm('Supprimer ce client ?')) return;
        await axios.delete(`${url}/api/pokemons/` + id, { headers: authHeader() });
    }

    return {
        pokemon,
        pokemons,
        namePokemon,
        errorsPokemon,
        getPokemon,
        getPokemons,
        createPokemon,
        updatePokemon,
        destroyPokemon
    }

}