import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodos from './+state/todos.reducer';
import { TodosEffects } from './+state/todos.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodos.TODOS_FEATURE_KEY, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class MytodoModule {}
