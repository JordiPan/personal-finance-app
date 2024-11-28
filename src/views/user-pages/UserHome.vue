<script setup lang="ts">
let storedUser = localStorage.getItem('user');
let token =localStorage.getItem('token');
let user : User | null = null;
if(storedUser){
    user = JSON.parse(storedUser);
}

</script>

<template>
  <div class="content">
    <h1 v-if="user">Hey user: {{ user.first_name }} {{ user.last_name }} {{ token }}</h1>
    <p>TESTTESTETESTXT</p>
  </div>
</template>

<style scoped>
</style>
