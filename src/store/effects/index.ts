import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { FETCH_DATA, FetchDataSuccess, ADD_STRING, ToDoSuccess } from "../actions";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http$: HttpClient) {}

  @Effect()
  fetchData$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_DATA),
    switchMap(() => {
      return this.http$
        .get("http://localhost:3000/todos")
        .pipe(map((data: Array<object>) => new FetchDataSuccess(data)));
    })
  );

  @Effect()
  postData$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_STRING),
    switchMap((action: any) => {
      return this.http$.post("http://localhost:3000/todos", action.payload).pipe(
        map((data: object) => new ToDoSuccess(data))
      );
    })
  );
}
