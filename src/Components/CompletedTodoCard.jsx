import React from 'react'

import "./completed.css"


function CompletedTodoCard({ title }) {
    return (
        <div className='flex completedcard'>
            <h3 style={{ width: "50%", overflowWrap: "break-word" }}>
                {title}
            </h3>
            <div className="ctas">
                <button>undo</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default CompletedTodoCard