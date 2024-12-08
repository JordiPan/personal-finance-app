<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
let user = store.state.user
let date = new Date(user.birth_date).toLocaleDateString('en-GB');
</script>

<template>
    <div class="card profile-card">
        <h1 class="profile-title">User Profile</h1>
        <hr>
        <div class="profile-body">
            <div class="row">
            <div class="col-md-12">
                <p>User id which actually shouldn't be shown: {{ user.id }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p>Email: {{ user.email }}</p>
            </div>
        <div class="row">
            <div class="col-md-12">
                <p>Birth date: {{ date }}</p>
            </div>
        </div>
        <button class="btn btn-info">Edit information</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
    padding: 4rem;
    margin: 2rem;
}
.profile-title {
    text-align: center;
}
.profile-body {
    font-size: larger;
}
</style>
