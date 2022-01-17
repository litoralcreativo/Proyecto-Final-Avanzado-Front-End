import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminProductsComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminProductsComponent],
})
export class AdminModule {}
