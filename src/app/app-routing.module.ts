import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { ExamplesComponent } from './components/examples/examples.component';
const routes: Routes = [
  {path: 'login/:name' , component: LoginComponent},
  {path: 'example' , component: ExamplesComponent },
  {path: 'index' , component: IndexComponent },
  {path: '' , component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
