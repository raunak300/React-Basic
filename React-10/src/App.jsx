import { useState } from 'react'
import { todoContext, TodoProvider, useTodo } from './context'
import './App.css'
import { useEffect } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
function App() {
  const [todos, setTodos] = useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>
    [...prev,{id:Date.now(),...todo}]
    )
  }
  
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>
      prev.map((t)=>
        // t.id === id ? { ...t, ...todo } : t
         t.id === id ? {...t,...todo}  : t
      ))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>
      prev.filter((t)=>  t.id!==id)
    )
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> 
    prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo ))
  }

  useEffect(()=>{ //get is imp first
    const todos=JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length>0) {
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    //we can destructure this here
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}> 
      <div className=' bg-zinc-900 h-[100vh] w-full'>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
               < div key={todo.id}
               className='w-full'>
                <TodoItem todo={todo} />
               </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
