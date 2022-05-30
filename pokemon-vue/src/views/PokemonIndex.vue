<template>
  <NavBar />
  <div class="container">
      <h1>Liste des pokemons</h1>
      <div class="row">
        <div class="form-group mb-3">
          <input type="text" class="form-control" placeholder="Rechercher un Pokemon" id="name" v-model="namePokemon">
        </div>
      </div>
      <div class="row">
        <div  class="col-4" v-for="pokemon in pokemons" :key="pokemon.id">
          <div class="card">
            <img :src="pokemon.picture" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ pokemon.name }}</h5>
              <p class="card-text">hp: {{ pokemon.hp }} - cp: {{ pokemon.cp }}</p>
              <p class="card-text d-inline type" :class="pokemonType.toLowerCase()" v-for="pokemonType in pokemon.types" :key="pokemonType">{{ pokemonType }}</p>
            </div>
            <div class="card-footer">
              <div class="btn-group" role="group" aria-label="Un groupe de boutons">
                <router-link :to="{ name: 'pokemon.edit', params: { id: pokemon.id }}" class="btn btn-secondary">Modifier</router-link>
                <button @click="deletePokemon(pokemon.id)" class="btn btn-danger">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { onMounted, watch } from "vue";
import usePokemons from "../services/usePokemons.js";
import NavBar from "@/components/NavBar";

export default {
    setup() {

        const { pokemons, namePokemon, getPokemons, destroyPokemon } = usePokemons();

        const deletePokemon = async (id) => {
            await destroyPokemon(id);
            await getPokemons();
        };
      
        onMounted(getPokemons());

        watch(namePokemon, () => getPokemons());

        return {
            pokemons,
            namePokemon,
            deletePokemon,
        };
    },
    components: { NavBar }
}
</script>

<style>
  .card {
    margin-bottom: 30px;
  }
  .type {
    margin: 10px;
    padding: 10px;
    border-radius: 25% 10%;
    color: white;
  }
  .feu {
    background-color: red;
  } 
  .eau {
    background-color: blue;
  }
  .plante {
    background-color: green;
  }
  .insecte {
    background-color: brown;
  }
  .normal {
    background-color: grey;
  } 
  .vol {
    background-color: skyblue;
  } 
  .poison {
    background-color: darksalmon;
  } 
  .fée {
    background-color: pink;
  }
  .psy {
    background-color: darkseagreen
  }
  .electrik {
    background-color: yellow;
     color: black;
  } 
  .combat {
    background-color: orange;
  }
</style>