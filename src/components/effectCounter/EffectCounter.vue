<template>
  <div class="counter-section">
    <h1>watch()</h1>
    <h3>countA: {{ countA }}</h3>
    <h3>countB: {{ countB }}</h3>
    <h3>A + B: {{ addAB }}</h3>
    <button @click="addOneA">Add 1 to A</button>
    <button @click="addOneB">Add 1 to B</button>
  </div>
</template>

<script>
import {watch, ref, computed} from "vue";
export default {
  name: "EffectCounter",
  setup(){
    const countA = ref(0)
    const addOneA = () => {
      countA.value++;
    }

    const countB = ref(0)
    const addOneB = () => {
      countB.value++;
    }

    const addAB = computed(() => {
      return countA.value + countB.value;
    })
    
    watch([countA, countB], ([newA, newB], [prevA, prevB]) => {
      console.log(countA.value, countB.value)
      console.log(newA, newB, prevA,prevB)
    })
 
    return {
      countA,
      countB,
      addAB,
      addOneA,
      addOneB
    }
  }
}
</script>

<style scoped>
.counter-section{
  text-align: center;
  margin: 50px;
}
</style>
