<template>
  <div class="counter-section">
    <h1>Define Component Child</h1>
    <p>{{name}}</p>
    <p>{{msg}}</p>
  </div>
</template>

<script >
// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: "DefineComponentChild",
//   props: {
//     name: String,
//     msg: { type: String, required: true }
//   },
//   data() {
//     return {
//       count: 1
//     }
//   },
//   mounted() {
//     this.name // type: string | undefined
//     this.msg // type: string
//     this.count // type: number
//   }
// })

import { defineComponent } from 'vue'
export default defineComponent({
  name: "DefineComponentChild",
  props: {
    name: Number,
    msg: { type: Number, required: true }
  },
  setup(props) {
    props.msg
    props.name 
  }
})
</script>

<style scoped>
.counter-section{
  text-align: center;
  margin: 50px;
}
</style>