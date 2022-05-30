<template>
  <div class="container">
    <h1>Connexion</h1>
    <div v-if="errors.message" class="alert alert-danger">
       {{ errors.message }}
    </div>
    <form @submit.prevent="handleLogin" :validation-schema="schema">
      <div class="form-group  mb-3">
        <label for="username">Username</label>
        <input name="username" type="text" class="form-control" v-model="form.username" />
      </div>
      <div class="form-group  mb-3">
        <label for="password">Password</label>
        <input name="password" type="password" class="form-control" v-model="form.password" />
      </div>
      <div class="d-grid gap-2  mb-3">
        <button class="btn btn-primary btn-block" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Login</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import authService from "@/services/authService";

export default {
  setup() {
    const { login, errors } = authService();

    const form = reactive({
            username: '',
            password: '',
    });

    const handleLogin = async () => {
        await login({ ...form });
    }

    return {
      form,
      handleLogin,
      errors
    }

  }
}
</script>

<style>

</style>