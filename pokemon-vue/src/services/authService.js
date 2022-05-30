import { ref } from "vue";
import router from "@/router";
import axios from 'axios';

export default function authService() {

    const url = "http://localhost:3000";
    const errors = ref([]);

    const login = async (user) => {
        try {
            let response = await axios.post(`${url}/api/login/`, {
                username: user.username,
                password: user.password
            });
            localStorage.setItem('user', JSON.stringify(response.data));
            await router.push({name: 'pokemons.index'});
        } catch (error) {
            let errorResponce = error.response.data;
            errors.value = errorResponce;
        }
    }

    const logout = async () => {
        localStorage.removeItem('user');
        await router.push({name: 'login'});
    }

    return {
        login,
        logout,
        errors
    }

}