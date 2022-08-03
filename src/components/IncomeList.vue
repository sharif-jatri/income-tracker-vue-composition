<template>
  <div class="income-list">
    <IncomeItem
        v-for="data in state.income"
        :key="data.id"
        :income="data"
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
  }
}
</script>

<style scoped>
.income-list {
  margin-top: 30px;
  padding: 15px;
}
</style>
