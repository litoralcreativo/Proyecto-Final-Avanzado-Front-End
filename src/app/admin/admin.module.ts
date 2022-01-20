import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

@NgModule({
  declarations: [AdminProductsComponent, AdminComponent, AdminUsersComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminProductsComponent],
})
export class AdminModule {}
