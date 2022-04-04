<template>
  <Fragment>
    <Rate :value="3"></Rate>
    <Rate :value="2.5" theme="red"></Rate>
    <Rate :value="1" theme="green"></Rate>
  </Fragment>
</template>

<script setup>
import Rate from "../components/Rate.vue";
</script>
