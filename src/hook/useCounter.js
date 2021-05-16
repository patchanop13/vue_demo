import {reactive, ref} from 'vue'

function useCounterRef(initial){
    const counter = ref(initial)
    function onClick(){
        counter.value++
    }
    return {counterRef:counter,onClickRef:onClick}
}

function useCounterRt(initial){
    const counterRt = reactive({counter:initial})
        function onClickRt(){
            counterRt.counter++
        }
    return {counterRt,onClickRt}
}

export default {useCounterRef,useCounterRt}