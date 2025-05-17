import { useContext } from "react";
import { createContext } from "react";

export const todoContext=createContext({
    todos:[
        {
            id:1,
            todo:"msg",
            completed:false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo=()=>{
    return (
        useContext(todoContext)
    )
}

export const TodoProvider=todoContext.Provider



//local storage
// problem=> stored in form of key:value
// and only in string format hence require conversion to json format and other things as well


//local storgae helps in maintaining the prev stateof the  react like some data did exist in the map and it wants to maintain that-on refresh not lost 