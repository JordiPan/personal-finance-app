<script setup lang="ts">
import finimage from '@/assets/img/not-stolen-banner-trust.webp';
import HomeInfoSection from '@/components/HomeInfoSection.vue';
</script>

<template>
  
  <div class="banner">
    <div class="banner-text">
      <h1>Personal financing app</h1>
      <p>Something about managing your finances and other related stuff</p>
    </div>
    
  </div>
  <div class="content">
    <HomeInfoSection>
      <template #image><img v-bind:src="finimage" alt="finance image"></template>
      <template #text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam consequatur fugit neque dolorem commodi 
          beatae numquam quibusdam obcaecati? Iure nobis, vero veniam eius doloremque odio magni placeat nemo minima. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nemo eius facilis alias minima officiis omnis assumenda qui, rerum aliquam ipsam cupiditate, ullam explicabo nesciunt, suscipit quis praesentium dolorem odit. Atque.</template>
    </HomeInfoSection>

    
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

    <HomeInfoSection>
      <template #image><img v-bind:src="finimage" alt="finance image"></template>
      <template #text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam consequatur fugit neque dolorem commodi 
          beatae numquam quibusdam obcaecati? Iure nobis, vero veniam eius doloremque odio magni placeat nemo minima. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nemo eius facilis alias minima officiis omnis assumenda qui, rerum aliquam ipsam cupiditate, ullam explicabo nesciunt, suscipit quis praesentium dolorem odit. Atque.</template>
    </HomeInfoSection>
    
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
    background:
        linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),
        url("src/assets/img/finance.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
  .banner-text {
    color: white;
    text-align: center;
    padding: 10rem;
    text-shadow: 0px 2px 20px #23430C;
  }
</style>
