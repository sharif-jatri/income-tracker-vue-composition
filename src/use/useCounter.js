import {computed, toRefs, reactive} from "vue";

export function useCounter() {
    // const counter = ref(0)
    // const doubleCounter = computed(() => {
    //     return counter.value * 2;
    // })

    const data = reactive({
        counter: 0,
        doubleCounter: computed(() => data.counter * 2)
    })

    const addOne = () => {
        // counter.value += 1;
        data.counter++;
    }

    // watch(counter, (newVal, oldVal) => {
    //     console.log(counter, newVal, oldVal)
    // })

    return {
        // counter,
        // doubleCounter,
        addOne,
        ...toRefs(data),
    }
}