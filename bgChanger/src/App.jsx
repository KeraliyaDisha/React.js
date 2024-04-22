import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className=" w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className=" flex justify-center bottom-14 fixed inset-x-0">
        <div className=" flex justify-center px-2 py-2 rounded-2xl shadow-lg bg-red-50 gap-2">
          <button onClick={ () => setColor("red")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={ () => setColor("black")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={ () => setColor("blue")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={ () => setColor("green")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={ () => setColor("orange")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "Orange"}}>Orange</button>
          <button onClick={ () => setColor("hotpink")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "hotpink"}}>hotpink</button>
          <button onClick={ () => setColor("purple")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={ () => setColor("skyblue")} className=" outline-none px-4 py-1 rounded-full text-blue-50 font-medium" style={{backgroundColor: "skyblue"}}>Skyblue</button>
        </div>
      </div>
    </div>
  )
}

export default App
