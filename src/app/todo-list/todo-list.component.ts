import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/store/reducers';
import { FetchData, AddToDo } from 'src/store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  singleData$: Observable<object>;
  data$: Observable<object>;
  inputSting: string;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new FetchData());
    this.data$ = this.store.select<object>(state => state.todos.data);
    this.singleData$ = this.store.select<object>(state => state.todos.singleData);
  }

  onEnterPressed(event) {
    this.inputSting = event.target.value;
    const inputObj = {
      id: Math.random(),
      description: this.inputSting,
      isCompleted: true
    };

    console.log(inputObj);

    this.store.dispatch(new AddToDo(inputObj));
    this.store.dispatch(new FetchData());
  }
}
