<script setup lang="ts">
import finimage from '@/assets/img/finance.jpg';
</script>

<template>
  
  <div class="banner">
    <h1 class="banner-title">Personal financing app</h1>
  </div>
  <div class="content">
    <div class="row info-block">
      <div class="col-md-6">
        <img v-bind:src="finimage" alt="finance image">
      </div>
      <div class="col-md-6 col-block">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam consequatur fugit neque dolorem commodi 
          beatae numquam quibusdam obcaecati? Iure nobis, vero veniam eius doloremque odio magni placeat nemo minima. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nemo eius facilis alias minima officiis omnis assumenda qui, rerum aliquam ipsam cupiditate, ullam explicabo nesciunt, suscipit quis praesentium dolorem odit. Atque.
        </p>
      </div>
    </div>
    <div class="row info-block">
      <div class="col-md-6 reverse-text col-block">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam consequatur fugit neque dolorem commodi 
          beatae numquam quibusdam obcaecati? Iure nobis, vero veniam eius doloremque odio magni placeat nemo minima. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nemo eius facilis alias minima officiis omnis assumenda qui, rerum aliquam ipsam cupiditate, ullam explicabo nesciunt, suscipit quis praesentium dolorem odit. Atque.
        </p>
    
      </div>
      <div class="col-md-6 reverse-img col-block">
        <img v-bind:src="finimage" alt="finance image">
      </div>
    </div>
    <div class="row info-block">
      <div class="col-md-6 col-block" >
        <img v-bind:src="finimage" alt="finance image">
      </div>
      <div class="col-md-6 col-block">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam consequatur fugit neque dolorem commodi 
          beatae numquam quibusdam obcaecati? Iure nobis, vero veniam eius doloremque odio magni placeat nemo minima. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nemo eius facilis alias minima officiis omnis assumenda qui, rerum aliquam ipsam cupiditate, ullam explicabo nesciunt, suscipit quis praesentium dolorem odit. Atque.
          
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-block {
    margin: 1rem;
    padding: 2rem;
    /* border-radius: 10px; */
    border-bottom: 1px solid gray;
    /* box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.52); */
    align-items: center;
    justify-content: center;
  }
  .col-block {
    padding: 0.5rem;
    text-align: center;
  }
  img {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  @media (max-width: 768px) {
    .reverse-text {
      order: 2;
    }
    .reverse-img {
      order: 1;
    }
  }
  .banner {
    background-image: url("src/assets/img/not-stolen-banner-trust.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
  .banner-title {
    color: white;
    text-align: center;
    padding: 10rem;
    text-shadow: 0px 1px 4px #23430C;
  }
</style>
