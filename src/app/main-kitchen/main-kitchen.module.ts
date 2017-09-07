import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainKitchenComponent } from './main-kitchen.component';
import { MainKitchenHeaderComponent } from './main-kitchen-header/main-kitchen-header.component';
import { MainKitchenSidebarComponent } from './main-kitchen-sidebar/main-kitchen-sidebar.component';
import { OrderMetaBarComponent } from './main-kitchen-order/order-meta-bar/order-meta-bar.component';
import { MainKitchenOrderComponent } from './main-kitchen-order/main-kitchen-order.component';
import { CounterPipe } from './main-kitchen-order/counter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MainKitchenComponent,
    MainKitchenHeaderComponent,
    MainKitchenSidebarComponent,
    MainKitchenOrderComponent,
    OrderMetaBarComponent,
    MainKitchenOrderComponent,
    CounterPipe
  ],
  exports: [MainKitchenComponent]
})
export class MainKitchenModule {}
