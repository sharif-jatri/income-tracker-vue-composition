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
import { ref, computed, watchEffect} from "vue";
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
    
    // watch([countA, countB], ([newA, newB], [prevA, prevB]) => {
    //   console.log(countA.value, countB.value)
    //   console.log(newA, newB, prevA,prevB)
    // })

    watchEffect(() => {
      console.log(countA.value, countB.value)

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



<!-- If you want to explicitly control the dependencies which will trigger the side-effect, then you must use watch() method. Otherwise, you can use watchEffect() method.
If you need previous values of the dependencies then you have to use the watch() method.
If you want to execute the callback function immediately when the component mounts then go with the watchEffect() method. The watch() is useful when you need to perform the method lazily. -->