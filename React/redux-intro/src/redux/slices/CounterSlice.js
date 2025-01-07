import { createSlice } from "@reduxjs/toolkit";

let localCounter=JSON.parse(localStorage.getItem("counter"))
const initialState={
    count: localCounter ? localCounter : 0,
    text:"salam"
}

export const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=0
        },
        incrementByAmount:(state,action)=>{
             console.log(action)
            state.count+=action.payload
        },
        decrementByAmount:(state,action)=>{
            
            state.count-=action.payload
        }

    }
})



export const  {increment,decrement,reset,incrementByAmount,decrementByAmount}= CounterSlice.actions

export default CounterSlice.reducer