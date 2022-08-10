<template>
  <div class="counter-section">
    <h1>DefineComponent</h1>
    <DefineComponentChild name="Name Props" msg="Messsage" />
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
</style>

