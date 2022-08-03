<template>
  <div class="income-item">
    <div class="removeItem" @click="removeItem">x</div>
    <div class="desc">
      {{ income.description }}
    </div>
    <div class="price">
      £ {{ income.value }}
    </div>
    <div class="date">
      {{ income.date }}
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomeItem",
  props: {
    income: Object
  },
  setup(props, {emit}){
    const removeItem =  () => {
      emit("remove-item", props.income.id);
    }

    return{
      removeItem
    }
  }
}
</script>

<style scoped>
.income-item {
  position: relative;
  display: flex;
  padding: 15px;
  background-color: #FFF;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto 30px;
}
.removeItem {
  color: #EF2D2D;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  margin: 0 15px;
  cursor: pointer;
}
.desc {
  color: #666;
  flex: 1 1 50%;
  font-size: 20px;
}
.price {
  color: #666;
  min-width: 70px;
  font-size: 20px;
}
.date {
  color: #666;
  text-align: right;
  font-size: 20px;
}
</style>
