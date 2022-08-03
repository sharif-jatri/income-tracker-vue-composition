<template>
  <TopNavbar :totalIncome="state.totalIncome" />
</template>

<script>
import {reactive, computed } from "vue";
import TopNavbar from "./components/layouts/TopNavbar";
export default {
  name: 'App',
  components: {
    TopNavbar
  },
  setup(){
    const state = reactive({
      income: [],
      totalIncome: computed(() => {
        let temp = 0;
        if(state.income.length > 0){
          for(let i = 0; i < state.income.length; i++){
            temp += state.income[i].value;
          }
        }
        return temp;
      })
    })

    return{
      state
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}
body {
  background: #EEE;
}
</style>
