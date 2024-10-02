import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

/*import { SurveyComponent } from './survey/survey.component';*/


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-clients', component: ListClientsComponent },
  //{ path: 'survey', component: SurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
