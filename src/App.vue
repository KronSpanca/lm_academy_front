<template>
  <div>
    <h1>{{ message }}</h1>
    <p class="text-red-500">
      kron
    </p>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const message = ref('Pershendetje')

setTimeout(() => {
  message.value = 'Diten e Mire'
}, 5000)
</script>
<style>
 h1{
  color: gold;
 }
</style>