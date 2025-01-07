import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from './redux/slices/CounterSlice'
import { useEffect } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
function App() {

  // let {count,text} = useSelector(state=>state.counter)
  // let dispatch=useDispatch()

  // useEffect(()=>{
  //   localStorage.setItem("counter",JSON.stringify(count))
  // },[count])
  return (
    <>
      {/* <button onClick={()=>dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={()=>dispatch(decrementByAmount(25))}>-25</button> */}
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
