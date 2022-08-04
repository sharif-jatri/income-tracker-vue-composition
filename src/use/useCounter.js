import { ref, computed, watch } from "vue";

export function useCounter() {
    const counter = ref(0)
    const doubleCounter = computed(() => {
        return counter.value * 2;
    })
    const addOne = () => {
        counter.value += 1;
    }

    watch(counter, (newVal, oldVal) => {
        console.log(counter, newVal, oldVal)
    })

    return {
        counter,
        doubleCounter,
        addOne
    }
}