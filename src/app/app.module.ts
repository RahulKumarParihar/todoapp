import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import reducers from "src/store/reducers";
import { AppEffects } from "src/store/effects";
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
