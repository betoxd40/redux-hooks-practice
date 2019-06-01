import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../../store/reducers/todo';
export default () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todosReducer.todos);

    const toggleTodo = todoId => dispatch(toggleTodoAction(todoId));
    const deleteTodo = todoId => dispatch(deleteTodoAction(todoId));

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={()=> toggleTodo(todo.id)}
                    />
                    <span className={todo.complete ? "complete" : null}>
                        {todo.name}
                    </span>
                    <span className="delete-button" onClick={() => deleteTodo(todo.id)}>
                        X
                    </span>
                </li>
            ))}
        </ul>
    )
}