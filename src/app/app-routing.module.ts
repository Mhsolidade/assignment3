import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { PerguntasComponent } from './perguntas/perguntas.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'questionario', component: PerguntasComponent, canActivate: [AuthGuard] },
  { path: 'resultado', component: ResultadoComponent, canActivate: [AuthGuard] },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
