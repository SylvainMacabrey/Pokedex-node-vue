<template>
    <NavBar />
    <div class="container">
        <h1>Ajouter un Pokemon</h1>
        <div v-if="errorsPokemon.length > 0" class="alert alert-danger">
            <ul>
                <li v-for="error in errorsPokemon" :key="error">{{ error.message }}</li>
            </ul>
        </div>
        <form @submit.prevent="storePokemon">
            <div class="form-group mb-3">
                <label for="name" class="form-label">Nom</label>
                <input type="text" class="form-control" id="name" v-model="form.name">
            </div>
            <div class="form-group mb-3">
                <label for="hp" class="form-label">Hp</label>
                <input type="text" class="form-control" id="hp" v-model="form.hp">
            </div>
            <div class="form-group mb-3">
                <label for="cp" class="form-label">Cp</label>
                <input type="text" class="form-control" id="cp" v-model="form.cp">
            </div>
            <div class="form-group mb-3">
                <label for="picture" class="form-label">Image</label>
                <input type="text" class="form-control" id="picture" v-model="form.picture">
            </div>
            <div class="mb-3 form-check form-switch form-check-inline" v-for="type in types" :key="type">
                <input type="checkbox" class="form-check-input" id="check-type-{{ type }}" :value="type" v-model="form.types">
                <label class="form-check-label" for="check">{{ type }}</label>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Ajouter</button>
            </div>
        </form>
    </div>
</template>

<script>

import NavBar from '@/components/NavBar';
import usePokemons from '@/services/usePokemons';
import { reactive } from 'vue';

export default {

    setup() {

        const {  createPokemon, errorsPokemon } = usePokemons();

        const types = [ 'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat' ];

        const form = reactive({
            name: '',
            hp: '',
            cp: '',
            picture: '',
            types: [],
            date: new Date(),
        });

        const storePokemon = async () => {
            await createPokemon({ ...form });
        }

        return {
            storePokemon,
            errorsPokemon,
            types,
            form
        }

    },

    components: { NavBar }

}
</script>

<style>

</style>