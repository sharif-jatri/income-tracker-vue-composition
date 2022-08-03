<template>
  <TopNavbar :totalIncome="state.totalIncome" />
  <IncomeForm @add-income="addIncome" />
  <IncomeList :state="state" @remove-item="removeItem" />
</template>

<script>
import {reactive, computed } from "vue";
import TopNavbar from "@/components/layouts/TopNavbar";
import IncomeForm from "@/components/IncomeForm";
import IncomeList from "@/components/IncomeList";
export default {
  name: 'HomeView',
  components: {
    TopNavbar,
    IncomeForm,
    IncomeList,
  },
  setup(){
    const todo = localStorage.getItem('todo');
    const state = reactive({
      income: todo ? JSON.parse(todo) : [],
      totalIncome: computed(() => {
        let temp = 0;
        if(state.income.length > 0){
          for(let i = 0; i < state.income.length; i++){
            temp += state.income[i].value;
          }
        }
        return temp;
      })
    });

    function addIncome(data){
      state.income = [...state.income, {
        id: Date.now(),
        description: data.description,
        value: parseInt(data.value),
        date: data.date,
      }]
      storeLocalStorage(state)
    }
    function removeItem(id) {
      state.income = state.income.filter(income => income.id != id);
      storeLocalStorage(state)
    }

    function storeLocalStorage(state){
      localStorage.setItem('todo', JSON.stringify(state.income))
    }

    return{
      state,
      addIncome,
      removeItem
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
