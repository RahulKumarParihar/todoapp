import { Action } from '@ngrx/store';

export const FETCH_DATA = '[Todo] FETCH_DATA';
export const FETCH_DATA_SUCCESS = '[Todo] FETCH_DATA_SUCCESS';
export const ADD_STRING = '[Todo] POST_STRING';
export const TO_SO_SUCCESS = '[Todo] TO_SO_SUCCESS';

export class FetchData implements Action {
  readonly type = FETCH_DATA;
}

export class FetchDataSuccess implements Action {
  readonly type = FETCH_DATA_SUCCESS;
  constructor(public payload: Array<object>) {}
}

export class AddToDo implements Action {
  readonly type = ADD_STRING;
  constructor(public payload: any) {}
}

export class ToDoSuccess implements Action {
  readonly type = TO_SO_SUCCESS;
  constructor(public payload: object) {}
}
