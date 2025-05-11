import React,{useState} from 'react'
import Button from './components/Button.jsx';
import './App.css';
const App = () => {
  const [color, setcolor] = useState("white");
  const allColors=[
    {color:"green" , text:"white"},
    {color:"red" , text:"white"},
    {color:"blue", text:"white"},
    {color: "grey", text:"white"},
    {color: "black" , text:"white"},
    {color: "white", text:"black"}
  ]
  const colorChange=(nColor)=>{
    setcolor(nColor);
  }
  return (
    <>
      <div className="h-[100vh] w-full bg-zinc-900 ">
        <div className="h-[45vh] w-80% bg-zinc-800 p-15 flex items-center justify-center">
          <div className="h-[35vh] w-[80vh] bg-white flex items-center justify-center "style={{ backgroundColor: color }}>
              {color}
          </div>
        </div>
        <div className=" flex flex-wrap justify-center gap-4">
          {
            allColors.map((c,index)=>(
              <Button
                key={index}
                onClick={() => colorChange(c.color)}
                color={c.color}
                text={c.text}
                role="button"
              >
                {c.color}
              </Button>
            ))
          }
        </div>
      </div>
    </>

  )
}

export default App