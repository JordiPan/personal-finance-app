<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
let user = store.state.user
</script>

<template>
    <h1>User's home</h1>
    <p>Yo: {{ user.first_name }}</p>
</template>

<style scoped>
</style>
