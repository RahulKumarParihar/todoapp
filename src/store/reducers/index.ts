import { ActionReducerMap } from '@ngrx/store';
import { todosReducer, TodosState } from './todosReducer';

export interface State {
    todos: TodosState;
}

const reducers: ActionReducerMap<State> = {
    todos: todosReducer,
};

export default reducers;
