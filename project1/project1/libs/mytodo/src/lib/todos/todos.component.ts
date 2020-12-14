import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo } from '../+state/todos.actions';
import { getTodosFrans } from '../+state/todos.selectors';

@Component({
  selector: 'project1-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Observable<string[]>;
  constructor(private store: Store) {
    this.todos = this.store.select(getTodosFrans);
  }

  ngOnInit(): void {}

  addTodo() {
    this.store.dispatch(addTodo({ todosFrans: ['frans' + Math.random()] }));
  }
}
