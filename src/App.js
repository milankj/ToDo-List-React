import './App.css'
import { useState } from 'react'

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  const newDate = new Date()
  const day = newDate.getDate()
  let month = newDate.getMonth() + 1
  const yrs = newDate.getFullYear()
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day}-{month < 10 ? '0' + month : month}-{yrs} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onChange={(e) => {
          setTodo(e.target.value) 
        }} type="text" value={toDo} placeholder="🖊️ Add item..." />
        <i onClick={() => {
          setTodos([...toDos, { text: toDo, status: false }])
          setTodo('')
          }} className="fas fa-plus" ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  obj.status = e.target.checked
                  console.log(obj)
                  console.log(e.target.checked)
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
        {toDos.map((obj)=>{
          if(obj.status){
            return(
              <h1>{obj.text}</h1>
            )
          }   
          return null
        })}   
      </div>  
    </div>
  )
}

export default App;
