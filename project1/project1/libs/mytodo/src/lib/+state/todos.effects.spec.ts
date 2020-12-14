import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TodosEffects } from './todos.effects';
import * as TodosActions from './todos.actions';

describe('TodosEffects', () => {
  let actions: Observable<any>;
  let effects: TodosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TodosEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(TodosEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TodosActions.init() });

      const expected = hot('-a-|', {
        a: TodosActions.loadTodosSuccess({ todos: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
