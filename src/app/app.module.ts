import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { InputWrapperComponent } from './common/input-wrapper/input-wrapper.component';
import { DataService } from './services/data.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    InputWrapperComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
