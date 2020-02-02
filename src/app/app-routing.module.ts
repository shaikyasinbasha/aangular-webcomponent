import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [{
  path: '',
  component: SignupComponent
},{
  path: 'result',
  component: ResultComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
