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

console.log(state.counters.indexOf(counter))