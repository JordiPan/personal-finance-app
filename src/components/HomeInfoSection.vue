<script setup lang="ts">
import { defineProps } from 'vue';

</script>

<template>
  <div class="row info-block">
      <div class="col-md-6">
        <!-- <img :src="imagePath" alt="finance image"> --> <slot name="image"></slot>
      </div>
      <div class="col-md-6 col-block">
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam consequatur fugit neque dolorem commodi 
          beatae numquam quibusdam obcaecati? Iure nobis, vero veniam eius doloremque odio magni placeat nemo minima. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Nemo eius facilis alias minima officiis omnis assumenda qui, rerum aliquam ipsam cupiditate, ullam explicabo nesciunt, suscipit quis praesentium dolorem odit. Atque.
        </p> --> <p><slot name="text"></slot></p>
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
</style>
