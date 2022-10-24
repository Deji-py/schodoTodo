import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { FaCheckCircle, FaClock, FaPen, FaTrash } from "react-icons/fa"
import "./todocard.css"



function TodoCard({ title, deleteTodo, id, item, showinput, completeTodo, update }) {
  const [hexcode, setHexcode] = useState("")
  const [visible, setVisible] = useState(false)
  const [newValue, setNewValue] = useState("")
  const [dateAndTime, setDateAndTime] = useState("Date and Time not Set")
  const datesetter = useRef()
  const hex = "0123456789abcdef"
  const handleCard = () => {
    setVisible(!visible)
    showinput(true)
  }
  const handleSetDateTime = () => {
    if (datesetter.current.value === "") {
      return ''
    }
    else {
      const value = datesetter.current.value
      setDateAndTime(value)
      setVisible(!visible)
      showinput(true)
    }
  }
  const handleForm = (e) => {
    e.preventDefault()
    if (newValue === "") {
      return ''
    }
    else {
      update(id, newValue)
      setVisible(!visible)
      showinput(true)
    }

  }

  useEffect(() => {
    let newHexcode = ''
    for (let i = 0; i <= 5; i++) {
      newHexcode += hex[Math.floor(Math.random() * hex.length)]
    }
    setHexcode("#" + newHexcode)
  }, [])

  return (
    <div className='container' style={{ position: "relative" }}>
      <p
        style={{
          position: "absolute",
          fontSize: "12px",
          top: "-10px",
          left: "40px",
          opacity: 0.4
        }}>
        {dateAndTime}
      </p>
      <div className='flex'

        style={{
          background: "rgba(110,100,150, 0.05)",
          boxShadow:"0px 0px 4px lightgray",
          borderRadius: "10px", border: "solid 1px 0px 0px 4px rgba(77,1,100, 0.4)",
          color: 'black',
          padding: "5px 0px 0px 20px ",
          margin: "0px 20px "
        }}>
        <div style={{
          background: hexcode,
          width: "20px",
          height: "20px",
          borderRadius: "5px"
        }}>
        </div>
        <p style={{
          width: "40%",
          fontSize: "12px",
          paddingLeft: "10px",
          overflowWrap: "break-word"
        }}
          onClick={() => handleCard()}>{title}
        </p>
        <div className="flex btns">
          <button style={{
            border: "none",
            background: "transparent",
            height: "100%", width: "100%",
            marginLeft: "10px"
          }}
            onClick={() => handleCard()}>
            <FaPen size={18} style={{ color: "gray", paddingRight: 15 }} />
          </button>
          <button
            onClick={() => deleteTodo(id)}
            style={{
              border: "none",
              background: "transparent",
              height: "100%",
              width: "100%",
            }}>
            <FaTrash size={16} style={{ color: "gray" }} />
          </button>
          <button
            onClick={() => completeTodo(id)}
            style={{
              border: "none",
              background: "transparent",
              height: "100%",
              width: "100%",
              marginLeft: "10px"
            }}>
            <FaCheckCircle size={18} style={{ color: "green" }} />
          </button>
        </div>
      </div>
      <div className='options'
        style={{
          height: visible ? "190px" : "0px",
          overflow: "hidden",
          width: "88vw"
        }}>
        <form style={{
          padding: "10px 10px 10px 2px",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10
        }}
          className="flex"
          onSubmit={(e) => handleForm(e)}>
          <div className="flex" style={{ justifyContent: "center", width: "100%", gap: 10 }}>
            <input type={"text"} style={{ padding: 10, borderRadius: 10, border: "none", flex: 0.5 }} placeholder={title} value={newValue} onChange={e => setNewValue(e.target.value)} onFocus={() => showinput(false)} />
            <button style={{ padding: "10px", border: "none", background: "var(--primary)", borderRadius: "10px", color: "white" }} onClick={() => handleForm()}>Update</button>
          </div>


          <label>Set Date and Time</label>
          <input placeholder='set time' ref={datesetter} type={"datetime-local"} style={{ padding: "10px", width: "80%" }} />
          <button className='flex' style={{ padding: "10px", border: "none", background: "var(--primary)", borderRadius: "10px", color: "white" }} onClick={() => handleSetDateTime()}><FaClock style={{ marginRight: "10px" }} />Add Date and Time</button>
        </form>
      </div>
    </div>
  )
}

export default TodoCard