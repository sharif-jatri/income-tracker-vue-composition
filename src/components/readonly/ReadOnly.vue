<template>
  <div class="counter-section">
    <h1>Readonly()</h1>

    <h3>Reactive: {{ original.count }}</h3> <!--correct-->
    <h3>Readonly: {{ copy.countRead }}</h3> <!--correct-->
    <button @click="increment">Add</button>
  </div>
</template>

<script>
import { readonly, reactive } from "vue";
export default {
  name: "ReadOnly",
  setup(){
    const original = reactive({ count: 0 })

    const copy = readonly({ countRead: 0 })

    const increment = () => {
      // mutating original will trigger watchers relying on the copy
      original.count++

      // mutating the copy will fail and result in a warning
      copy.countRead++ // warning!
    }

    return {
      increment,
      original,
      copy,
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
