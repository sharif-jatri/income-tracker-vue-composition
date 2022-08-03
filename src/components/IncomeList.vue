<template>
  <div class="income-list">
    <IncomeItem
        v-for="data in state.income"
        :key="data.id"
        :income="data"
        @remove-item="removeItem"
    />
  </div>
</template>

<script>
import IncomeItem from "@/components/IncomeItem";

export default {
  name: "IncomeList",
  components:{
    IncomeItem,
  },
  props: {
    state: Object
  },
  setup(props, {emit}){
    function removeItem(id) {
      emit( 'remove-item', id );
    }

    return{
      removeItem
    }
  }
}
</script>

<style scoped>
.income-list {
  margin-top: 30px;
  padding: 15px;
}
</style>
