<template>
  <div class="counter-section">
    <h1>NextTick()</h1>
    <ul ref="uli">
        <li v-for="item in list" :key="item">
            {{item}}
        </li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  name: "NextTick",
//   setup(){
//     const list = ref(['a', 'b', 'c'])
//     const addItem = () => {
//         list.value.push('ab'); 
//         console.log(list)
//         console.log(list.value.length)
//     }
    
//     return {
//       addItem,
//       list
//     }
//   }
    data(){
        return{
            list: [1, 2, 3]
        }
    },
    methods: {
        addItem(){
            this.list.push(`${Date.now()}`);
            this.list.push(`${Date.now()}`);
            this.list.push(`${Date.now()}`);

            this.$nextTick(() => {
                 const ulElem = this.$refs.uli;
            console.log(ulElem.childNodes)
            console.log(ulElem.childNodes.length)
            })
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