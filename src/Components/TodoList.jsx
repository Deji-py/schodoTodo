import React from 'react'
import TodoCard from './TodoCard'

function TodoList({ todolist, deleteTodo, complete }) {


    return (

        <div>
            {todolist.map((todoitem, key) =>
                <TodoCard key={key}
                    id={key}
                    completeTodo={complete}
                    deleteTodo={deleteTodo}
                    title={todoitem.title}>
                </TodoCard>
            )}
        </div>
    )
}

export default TodoList