import React from 'react';
import Footer from './Footer';
import AddTodo from '../container/AddTodo';
import VisibileTodoList from '../container/VisibleTodoList';

const App = () => (
    <div>
        <AddTodo/>
        <VisibileTodoList/>
        <Footer/>
    </div>
);

export default App