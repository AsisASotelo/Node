state = {

    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
        {id:5,value:0},
    ]
}



const counter = [state.counters[2]]
const counters = [...state.counters]

index = 2
console.log("Counters 2" , counters)
console.log("State.Counters:",state.counters)
console.log("counter:",counter)
counters[index] = {...counter}
console.log("After Index Change State Counters",state.counters)
counters[index].value++
console.log("State Counters Final",state.counters)
console.log("Counters Final",counters)


