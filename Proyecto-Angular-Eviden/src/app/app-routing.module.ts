import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { FormClientComponent } from './form-client/form-client.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path:'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'', component: LoginComponent },
  { path:'form', component: FormClientComponent, canActivate: [AuthGuard] },
  { path:'form/:id', component: FormClientComponent, canActivate: [AuthGuard] },
  { path:'films', component: FilmComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
