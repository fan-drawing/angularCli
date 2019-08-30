import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { reducer } from './reduces/tutorial.reducers';
import { BlockoneComponent } from './components/blockone/blockone.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { ToneComponent } from './components/block/tone/tone.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    BlockoneComponent,
    ExamplesComponent,
    ToneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
