import { createStore, combineReducers } from 'redux';
import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../components/App';


const todo = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };

        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        div);
});

it('Toggle Todo without mutating Object.',() => {
    const toggleTodo = (todo) => {
        return {
            ...todo,
            completed: !todo.completed
        };
    };
    const testToggleTodo = () => {
        const todoBefore = {
            id: 0,
            text: 'Learn Redux',
            completed: false
        };
        const todoAfter = {
            id: 0,
            text: 'Learn Redux',
            completed: true
        };

        deepFreeze(todoBefore);

        expect(
            toggleTodo(todoBefore)
        ).toEqual(todoAfter);
    };
});

it('Adds Todo Reducer without mutating.', () => {
   const testAddTodo = () => {
       const stateBefore = [];
       const action = {
           type: 'ADD_TODO',
           id: 0,
           text: 'Learn Redux'
       };
       const stateAfter = [
           {
           id: 0,
           text: 'Learn Redux',
           completed: false
       }
       ];

       deepFreeze(stateBefore);
       deepFreeze(action);

       expect(
           todos(stateBefore, action)
       ).toEqual(stateAfter);
    };
});

it('Toggles Todo Reducer without mutation.', () => {
   const testToggleTodo = () => {
       const stateBefore = [
           {
               id: 0,
               text: 'Learn Redux',
               completed: false
           },
           {
               id: 1,
               text: 'Go Shopping',
               completed: false
           }
       ];
       const action = {
           type: 'TOGGLE_TODO',
           id: 1
       };
       const stateAfter = [
           {
               id: 0,
               text: 'Learn Redux',
               completed: false
           },
           {
               id: 1,
               text: 'Go Shopping',
               completed: true
           }
       ];

       deepFreeze(stateBefore);
       deepFreeze(action);

       expect(
           todos(stateBefore, action)
       ).toEqual(stateAfter);

   };
});


const store = createStore(todoApp);

console.log('initial state:');
console.log(store.getState());
console.log('===============');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('===============');

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go Shopping'
});

console.log('Current state:');
console.log(store.getState());
console.log('===============');

console.log('Dispatching TOGGLE_TODO');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0,
});

console.log('Current state:');
console.log(store.getState());
console.log('===============');

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED',
});

console.log('Current state:');
console.log(store.getState());
console.log('===============');
