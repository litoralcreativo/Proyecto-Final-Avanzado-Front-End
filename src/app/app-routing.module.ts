import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accountModule = () => import('./features/account/account.module').then((m) => m.AccountModule);
const homeModule = () => import('./features/home/home.module').then((m) => m.HomeModule);

const routes: Routes = [
  {
    path: '', 
    loadChildren: homeModule
  },
  {
    path: 'account', 
    loadChildren: accountModule
  },
  
  {
    path: '**',
    redirectTo: '/account/login'
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
