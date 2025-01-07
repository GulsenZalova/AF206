import { createSlice } from "@reduxjs/toolkit";


let localTodo=JSON.parse(localStorage.getItem("todos"))
const initialState={
    todos:localTodo ? localTodo :[]
}

export const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let newTodo={
                id:state.todos.length+1,
                todo:action.payload,
                isComplete:false
            }

            state.todos=[...state.todos,newTodo]
        },
        deleteTodo:(state,action)=>{
            let filteredTodo=state.todos.filter(todo=>todo.id!==action.payload)
            state.todos=[...filteredTodo]
        },
        completeTodo:(state,action)=>{
            let findTodo= state.todos.find(todo=>todo.id==action.payload)
            findTodo.isComplete=!findTodo.isComplete
            state.todos=[...state.todos]
        }
    }
})


export const {addTodo,deleteTodo,completeTodo}= TodoSlice.actions
export default TodoSlice.reducer