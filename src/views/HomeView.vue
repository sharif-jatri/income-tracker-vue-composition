<template>
  <TopNavbar :totalIncome="state.totalIncome" />
  <IncomeForm @add-income="addIncome" />
  <IncomeList :state="state" @remove-item="removeItem" />
  <hr />
  <CounterSection />
  <hr />
  <EffectCounter />
  <hr />
  <NextTick />
  <hr />
  <DefineComponent />
  <hr />
  <RefReactive />
</template>

<script>
import {reactive, computed } from "vue";
import TopNavbar from "@/components/layouts/TopNavbar";
import IncomeForm from "@/components/IncomeForm";
import IncomeList from "@/components/IncomeList";
import CounterSection from "@/components/counter/CounterSection";
import EffectCounter from "@/components/effectCounter/EffectCounter.vue";
import NextTick from "@/components/nextTick/NextTick.vue";
import DefineComponent from "@/components/defineComponent/DefineComponent.vue";
import RefReactive from "@/components/refReactive/RefReactive";
export default {
  name: 'HomeView',
  components: {
    RefReactive,
    CounterSection,
    TopNavbar,
    IncomeForm,
    IncomeList,
    EffectCounter,
    NextTick,
    DefineComponent
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

    const addIncome = (data) => {
      state.income = [...state.income, {
        id: Date.now(),
        description: data.description,
        value: parseInt(data.value),
        date: data.date,
      }]
      storeLocalStorage(state)
    }
    const removeItem = (id) => {
      state.income = state.income.filter(income => income.id != id);
      storeLocalStorage(state)
    }

    const storeLocalStorage = (state) => {
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
