import { DISPLAY_RANDOM_NAME, FETCH_DATA_SUCCESS, ADD_STRING, TO_SO_SUCCESS } from "../actions";
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface TodosState {
  name: string;
  data: Array<object>,
  singleData: object
}

const initialState: TodosState = {
  name: '',
  data: [],
  singleData: {}
};

export function todosReducer(state = initialState, action): TodosState {
  switch (action.type) {
    case DISPLAY_RANDOM_NAME: {
      return {
          ...state,
          name: getRandomName(),
      }
    }
    
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      }
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

const getRandomName = () => {
    const randomNames = ["ThoughtWorks Mumbai", "ThoughtWorks Gurgaon", "ThoughtWorks Pune", "ThoughtWorks Bangalore", "ThoughtWorks Hyderabad", "ThoughtWorks Chennai", "ThoughtWorks Coimbatore"];
    const index = Math.floor(Math.random() * randomNames.length);
    return randomNames[index];
}

