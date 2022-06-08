import React from "react";
import { Todo } from "../models/todo.models";

interface TodoListProps {
    items: Todo[];
    todoDeleteHandler: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({items, todoDeleteHandler}) => {
    return(
        <ul>
            {items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={todoDeleteHandler.bind(null, todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
}


export default TodoList;