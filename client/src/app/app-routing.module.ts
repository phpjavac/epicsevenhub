import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './pages/count/count.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'count', loadChildren: () => import('./pages/count/count.module').then(m => m.CountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
