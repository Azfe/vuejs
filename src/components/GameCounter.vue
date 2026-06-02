<script setup>

console.log('componente de juego')


</script>

<template>
  <button @click="counter++">+</button>

  <span>contador {{ counter }}</span>

  <button @click="counter--">-</button>

</template>

<style scoped>
button {
  background-color: #4CAF50;
  /* Green */
  margin: 0 10px;
}
</style>
