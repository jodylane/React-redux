import { combineReducers } from 'redux';

const store = createStore(todoApp);

//this reducer stores all todos in an array
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
            return state
    }
};
// this reducer manages a single object
const todo = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return{
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
// this reducer set visibility for todos
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

// this function returns a function reducer that manages todos and visibilityFilter reducers
const todoApp = combineReducers({
    todos,
    visibilityFilter
});