import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaTrash, FaUndo } from 'react-icons/fa'

import "./completed.css"


function CompletedTodoCard({ title, deletetodo , undoTodo }) {
    return (
        <div className='flex completedcard'>
            <h3 style={{ width: "50%", overflowWrap: "break-word" }}>
                {title}
            </h3>
            <div className="flex btns">
                <button 
                onClick={()=>deletetodo()}
                style={{ border: "none", background: "transparent", height: "100%", width: "100%"}}>
                    <FaTrash size={16} style={{ color: "gray" }} />
                </button>
                <button
                onClick={()=>undoTodo()}
                 style={{ border: "none", background: "transparent", height: "100%", width: "100%",paddingLeft:"18px" }}>
                    <FaUndo size={16} style={{ color: "gray" }} />
                </button>

            </div>
        </div>
    )
}

export default CompletedTodoCard