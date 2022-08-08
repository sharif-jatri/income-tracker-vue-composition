<template>
  <div class="counter-section">
    <h1>DefineComponent</h1>
    <DefineComponentChild msg="errsad" />
  </div>
</template>

<script >
import DefineComponentChild from './DefineComponentChild.vue'
export default {
    name: "DefineComponent",
    components: { DefineComponentChild }
}
</script>

<style scoped>
.counter-section{
  text-align: center;
  margin: 50px;
}

