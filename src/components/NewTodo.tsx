import React, { useRef } from "react";

interface NewTodoProps {
    todoAddHandler: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({todoAddHandler}) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        if (enteredText.trim().length === 0) return;
        todoAddHandler(enteredText);
        textInputRef.current!.value = "";
    }
    return(
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
}

export default NewTodo;