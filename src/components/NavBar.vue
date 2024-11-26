<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="navbar">
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
