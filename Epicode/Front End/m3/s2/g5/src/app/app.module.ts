import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './parts/pages/todo/todo.component';
import { CompletatiComponent } from './parts/pages/completati/completati.component';
import { HeaderComponent } from './parts/components/header/header.component';
import { TodolistComponent } from './parts/components/todolist/todolist.component';
import { InputTodoComponent } from './parts/components/inputtodo/inputtodo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent,
    HeaderComponent,
    TodolistComponent,
    InputTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
