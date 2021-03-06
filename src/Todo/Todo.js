import React, { Component } from 'react';
import './TodoReducers';

let nextTodoId = 0;
class TodoApp extends Component {
    render(){
        return (
            <div>
                <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: 'TEST',
                    id: nextTodoId++
                })
                }}>Add Todo</button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>{todo.text}</li>
                    )}
                </ul>
            </div>
        );
    }
}
export default TodoApp

