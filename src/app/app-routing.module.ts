import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/notfound/notfound.component';

const accountModule = () =>
  import('./features/account/account.module').then((m) => m.AccountModule);
const homeModule = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);
const productsModule = () =>
  import('./features/products/products.module').then((m) => m.ProductsModule);

const routes: Routes = [
  {
    path: '',
    loadChildren: homeModule,
  },
  {
    path: 'account',
    loadChildren: accountModule,
  },

  {
    path: 'notfound',
    component: NotFoundComponent,
  },
  {
    path: 'products',
    loadChildren: productsModule,
  },

  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
