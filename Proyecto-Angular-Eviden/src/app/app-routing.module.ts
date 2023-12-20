import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { FormClientComponent } from './form-client/form-client.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path:'', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginComponent },
  { path:'form', component: FormClientComponent },
  { path:'form/:id', component: FormClientComponent },
  { path:'films', component: FilmComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
