import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './parts/pages/todo/todo.component';
import { CompletatiComponent } from './parts/pages/completati/completati.component';
import { HeaderComponent } from './parts/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
