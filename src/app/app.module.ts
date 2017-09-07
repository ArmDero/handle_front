import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainKitchenModule } from './main-kitchen/main-kitchen.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainKitchenModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
