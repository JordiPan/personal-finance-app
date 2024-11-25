<script setup lang="ts">
import { reactive, ref } from 'vue';
import finimage from '@/assets/img/finance.jpg';
import NavBar from './components/NavBar.vue';
import Home from './components/pages/Home.vue';
import Footer from './components/Footer.vue';
const name: string = "fefwew";
const input = ref<string>('');
interface NumberList {
  listname?: string
  numbers: number[]
}
const list : NumberList = reactive({
  listname: "janmes",
  numbers: [1,2,3555,5]
});

function clickListener() {
  list.numbers[2] = 3;
  console.log(list)
}
</script>

<template>
  <NavBar></NavBar>
  <Home></Home>
  <Footer></Footer>
</template>

<style>

</style>