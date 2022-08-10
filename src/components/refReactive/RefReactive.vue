<template>
  <div class="counter-section">
    <h1>ref() vs reactive()</h1>

<!--    <h1>{{ count.value }}  //incorrect  </h1>-->

    <h1>{{ count }}</h1> <!--correct-->
    <button @click="increment">Add</button>
    <h3>{{person.name}}</h3>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "RefReactive",
  setup(){
    const count = ref(0)

    const person = reactive({
      id: 1,
      name: 'John Doe',
      flag: false
    })

    // count === 0 // false
    // count.value === 0 // true

    const increment = () => {
      count.value++;
      if(count.value === 5){
        alert("Max limit reached")
      }
    }

    // One advantage of reactive is that it does not use a value property, so it may be a little easier to read.

    const changeName = () => {
      person.name = 'Peter Griffin' // true
      // person.name.value == 'Peter Griffin' // false
    }

    return {
      count,
      increment,
      person,
      changeName
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
