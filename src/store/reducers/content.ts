import { ActionReducerMap } from "@ngrx/store";
import { todosReducer, TodosState } from './todosReducer';

export interface DataType {
    todos: TodosState;
}

const dataReducers: ActionReducerMap<DataType> = {
    todos: todosReducer,
};

export default dataReducers;