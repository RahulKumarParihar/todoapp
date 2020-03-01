import { FETCH_DATA_SUCCESS, TO_SO_SUCCESS } from '../actions';

export interface TodosState {
  name: string;
  data: Array<object>;
  singleData: object;
}

const initialState: TodosState = {
  name: '',
  data: [],
  singleData: null
};

export function todosReducer(state = initialState, action): TodosState {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case TO_SO_SUCCESS: {
      return {
        ...state,
        singleData: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
