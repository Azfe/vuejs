<script setup>

const isActive = true

</script>

<template>
  <button @click="counter++">+</button>

  <span class="counter" :class="{ 'counter--active': isActive }">contador: <span>0 - {{ counter }}</span></span>

  <button @click="counter--">-</button>

</template>

<style scoped lang="scss">
.counter {
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 20px;

  &>span {
    color: #1f099b;
  }
}

.counter--active {
  color: #4CAF50;
}

button {
  background-color: #a80b0b;
  /* Green */
  margin: 0 10px;
}
</style>
