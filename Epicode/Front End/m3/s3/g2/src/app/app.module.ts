import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempformpageComponent } from './parts/pages/tempformpage/tempformpage.component';
import { ReactformpageComponent } from './parts/pages/reactformpage/reactformpage.component';
import { TempformComponent } from './parts/components/tempform/tempform.component';
import { ReactformComponent } from './parts/components/reactform/reactform.component';
import { HeaderComponent } from './parts/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TempformpageComponent,
    ReactformpageComponent,
    TempformComponent,
    ReactformComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
