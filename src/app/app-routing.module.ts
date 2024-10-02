import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { AddUserComponent } from './add-user/add-user.component'; // Import the AddUser component

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-clients', component: ListClientsComponent },
  { path: 'add-user', component: AddUserComponent }, // Add the route for Add User
  // Uncomment this line if you want to include the Survey component
  // { path: 'survey', component: SurveyComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}