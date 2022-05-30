<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Pokedex</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link :to="{ name: 'pokemons.index' }" class="nav-link">Liste des Pokemon</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'pokemon.create' }" class="nav-link">Ajouter un Pokemon</router-link>
            </li>
            </ul>
            <button @click="logout()" class="btn btn-outline-light">Déconnexion</button>
        </div>
        </div>
    </nav>
</template>

<script>
import authService from '@/services/authService'

export default {

  setup() {
    
    const { logout } = authService();

    return {
      logout,
    }

  }

}
</script>