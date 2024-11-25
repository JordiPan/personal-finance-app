<script setup lang="ts">
</script>

<template>
  <nav class="navbar">
    <a class="nav-link" routerLink="/">Home</a>
    <a class="nav-link" routerLink="about">About</a>
    <a class="nav-link" href="#">Login</a>
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
