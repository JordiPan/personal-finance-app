<script setup lang="ts">
import router from '@/router/router';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const url = import.meta.env.VITE_API_URL;
const formData = {
    email: '',
    password: ''  
};

async function submit() {
    try {
        let result = await axios.post(url+'auth/login', {
        email: formData.email,
        password: formData.password
    })
    const token = result?.data?.token;
    const user = result?.data?.user;
    //later userid but for now user as item
    store.dispatch('login', { token, user });
    router.push({name: 'user-home'})
    }
    catch(error) {
        console.error('Error during login:', error);
    }
}
</script>

<template>
  <div class="content">
    <h1>Login dude</h1>
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="formData.email" required>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" name="password" v-model="formData.password" required>
  </div>
  <RouterLink to="register" class="register-link">No account? register here!</RouterLink>
  <button type="submit" class="btn btn-primary" v-on:click.prevent="submit()">Submit</button>
</form>

  </div>
</template>

<style scoped>
.register-link {
  display: block;
}
</style>
