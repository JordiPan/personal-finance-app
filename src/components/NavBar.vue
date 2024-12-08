<script setup lang="ts">
import router from '@/router/router';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const isAuthenticated = computed(() => store.getters.isAuthenticated);


function logout() {
  store.dispatch('logout');
  router.push({name: 'home'});
}

</script>

<template>
  <nav class="navbar"v-if="isAuthenticated">
      <RouterLink class="nav-link" :to="{name: 'user-home'}">Home</RouterLink>
    <!-- <RouterLink class="nav-link" :to="{name: 'categories'}">Categories</RouterLink> -->
    <RouterLink class="nav-link" :to="{name: 'profile'}">Profile</RouterLink>
    <a class="nav-link" v-on:click="logout()">Logout</a>
</nav>
<nav class="navbar" v-else>
  <RouterLink class="nav-link" to="/">Home</RouterLink>
    <RouterLink class="nav-link" to="about">About</RouterLink>
    <RouterLink class="nav-link" to="login">Login</RouterLink>
</nav>

</template>

<style scoped>
.navbar {
    background-color: #343a40;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .nav-link {
    cursor: pointer;
    color: white;
    text-decoration: none;
    padding: 1rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .nav-link:hover {
    background-color: #4d555e;
  }
  
  .nav-link:last-child {
    margin-left: auto;
  }
</style>
