<template>
  <div class="counter-section">
    <h3>Counter: {{ counter }}</h3>
    <h3>Double Counter: {{ doubleCounter }}</h3>
    <button @click="addOne">Add 1</button>
  </div>
</template>

<script>
import {useCounter} from "@/use/useCounter";

export default {
  name: "CounterSection",
  setup(){
    /*
    const counter = ref(0)
    const doubleCounter = computed(() => {
      return counter.value * 2;
    })
    const addOne = () => {
      counter.value += 1;
    }

    watch(counter, (newVal, oldVal) => {
      console.log(counter, newVal, oldVal)
    })
     */

    const {
      counter,
      doubleCounter,
      addOne
    } = useCounter()

    return {
      counter,
      doubleCounter,
      addOne
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
