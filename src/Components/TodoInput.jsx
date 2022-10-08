import React, { useState } from 'react'
import { useRef } from 'react'

function TodoInput({ addtodo }) {
  const [todotext, setTodoText] = useState("")
  const inputref = useRef()

  // const handleStyle = () => {
  //   inputref.current.style.border = "solid 2px var(--secondary)"
  //   console.log(34);
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todotext === "") {
      console.log("Nothing Typed");
    }
    else {
      addtodo({ title: todotext, complete: false })
      setTodoText("")
    }

  }


  return (
    <div style={{
      float: "center",
      width: '100%',
      position: "fixed",
      background:"rgba(255,255,255,0.8)",
      boxShadow: "0px 0px 4px rgba(100,100,100, 0.3)",
      zIndex: "200",
      display: "flex",
      height: "100px",
      bottom: "0",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter:"blur(8px)"
    }}>
      <form onSubmit={(e) => handleSubmit(e)} className="flex">
        <label>
          <input
            ref={inputref}
            // onFocus={handleStyle}
            style={{
              background: "whitesmoke",
              borderRadius: "100px",
              border: "none",
              padding: 15,
              fontSize: "15px",
              boxShadow: "0px 0px 4px rgba(100,100,100, 0.3)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            }} placeholder='Enter Todo' type={"text"} value={todotext} onChange={(e) => { setTodoText(e.target.value) }} />
        </label>
        <button onClick={ handleSubmit } style={{
          width: 50,
          height: 50,
          fontSize: "30px",
          background: "var(--primary)",
          borderRadius: "100px",
          border: "none",
          color:"white",
          boxShadow: "0px 0px 4px rgba(100,100,100, 0.3)",
          marginLeft: "20px",
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}>+</button>
      </form>
    </div>
  )
}

export default TodoInput