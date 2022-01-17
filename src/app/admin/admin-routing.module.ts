import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'products', component: AdminProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
