import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaCheckCircle, FaTrash } from "react-icons/fa"
import "./todocard.css"



function TodoCard({ title, deleteTodo, id, item, completeTodo }) {
  const [hexcode, setHexcode] = useState("")
  const [visible, setVisible] = useState(false)

  const hex = "0123456789abcdef"

  useEffect(() => {
    let newHexcode = ''
    for (let i = 0; i <= 5; i++) {
      newHexcode += hex[Math.floor(Math.random() * hex.length)]
    }
    setHexcode("#" + newHexcode)
  }, [])

  return (
    <div className='container'>

      <div className='flex' onClick={()=>setVisible(!visible)} style={{ background: "rgba(77,1,100, 0.05)", borderRadius: "10px", border: "solid 1px 0px 0px 4px rgba(77,1,100, 0.4)", color: 'black', padding: "20px", margin: "0px 20px " }}>

        <div style={{ background: hexcode, width: "20px", height: "20px", borderRadius: "5px" }}>
        </div>
        <p style={{ width: "60%", fontSize: "12px", overflowWrap: "break-word" }}>{title}</p>
        <div className="flex btns">
          <button onClick={() => deleteTodo(id)} style={{ border: "none", background: "transparent" }}><FaTrash size={16} style={{ color: "gray" }} /></button>
          <button onClick={() => completeTodo(id)} style={{ border: "none", background: "transparent", marginLeft: "10px" }}><FaCheckCircle size={18} style={{ color: "green" }} /></button>
        </div>
      </div>
      <div className='options' style={{ height:visible?"300px": "0px", overflow:"hidden"}}>
        {title}
      </div>
    </div>
  )
}

export default TodoCard