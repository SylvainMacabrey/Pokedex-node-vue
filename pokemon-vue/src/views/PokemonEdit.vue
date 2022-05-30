<template>
    <NavBar />
    <div class="container">
        <h1>Modifier le Pokemon</h1>
        <div v-if="errorsPokemon.length > 0" class="alert alert-danger">
            <ul>
                <li v-for="error in errorsPokemon" :key="error">{{ error.message }}</li>
            </ul>
        </div>
        <form @submit.prevent="savePokemon">
            <div class="form-group mb-3">
                <label for="name" class="form-label">Nom</label>
                <input type="text" class="form-control" id="name" v-model="pokemon.name">
            </div>
            <div class="form-group mb-3">
                <label for="hp" class="form-label">Hp</label>
                <input type="text" class="form-control" id="hp" v-model="pokemon.hp">
            </div>
            <div class="form-group mb-3">
                <label for="cp" class="form-label">Cp</label>
                <input type="text" class="form-control" id="cp" v-model="pokemon.cp">
            </div>
            <div class="form-group mb-3">
                <label for="picture" class="form-label">Image</label>
                <input type="text" class="form-control" id="picture" v-model="pokemon.picture">
            </div>
            <div class="mb-3 form-check form-switch form-check-inline" v-for="type in types" :key="type">
                <input type="checkbox" class="form-check-input" id="check-type-{{ type }}" :value="type" v-model="pokemon.types">
                <label class="form-check-label" for="check">{{ type }}</label>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Modifier</button>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted } from "vue";
import usePokemons from "../services/usePokemons";
import NavBar from "@/components/NavBar";

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {

        const { getPokemon, pokemon, updatePokemon, errorsPokemon } = usePokemons();

        const types = [ 'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat' ];

        const savePokemon = async () => {
            await updatePokemon(props.id);
        };

        onMounted(getPokemon(props.id));

        return {
            errorsPokemon,
            pokemon,
            types,
            savePokemon
        };
    },

    components: { NavBar }
}
</script>

<style>

</style>