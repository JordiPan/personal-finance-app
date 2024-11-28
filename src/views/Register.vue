<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import router from '@/router/router';
const url = import.meta.env.VITE_API_URL;
const formData = {
    first_name: '',
    email: '',
    last_name: '',
    birth_date: '',
    password: ''  
};

async function submit() {
    try {
        await axios.post(url+'auth/register', {
        first_name: formData.first_name,
        email: formData.email,
        last_name: formData.last_name,
        birth_date: formData.birth_date,
        password: formData.password
    })
    router.push({name: 'login'})
    }
    catch(error) {
        console.error('Error during form submission:', error);
    }
}
</script>

<template>
  <div class="content">
    <h1>Register dude</h1>
    <form>
  <div class="form-group">
    <label for="f-name">First name</label>
    <input type="text" class="form-control" id="f-name" placeholder="First name" name="first_name" v-model="formData.first_name" required>
  </div>
  <div class="form-group">
    <label for="l-name">Last name</label>
    <input type="text" class="form-control" id="l-name" placeholder="Last name" name="last_name" v-model="formData.last_name" required>
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="formData.email" required>
  </div>
  <div class="form-group">
    <label for="birth-date">Date of birth</label>
    <input type="date" class="form-control" id="birth-date" placeholder="DD-MM-YYYY" name="birth_date" v-model="formData.birth_date" required>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" name="password" v-model="formData.password" required>
  </div>
  <RouterLink to="login" class="login-link">Already have an account? login here!</RouterLink>
  <button type="submit" class="btn btn-primary" v-on:click.prevent="submit()">Submit</button>
</form>

  </div>
</template>

<style scoped>
.login-link {
  display: block;
}
</style>
