import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminProductsComponent, AdminComponent, AdminUsersComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [AdminProductsComponent],
})
export class AdminModule {}
