import React from 'react'
import TodoCard from './TodoCard'

function TodoList({ todolist, deleteTodo, complete, isinputshowing, updatetodo}) {


    return (

        <div>
            {todolist.map((todoitem, key) =>
                <TodoCard key={key}
                    id={key}
                    showinput = {isinputshowing}
                    completeTodo={complete}
                    update= {updatetodo}
                    deleteTodo={deleteTodo}
                    title={todoitem.title}>
                </TodoCard>
            )}
        </div>
    )
}

export default TodoList