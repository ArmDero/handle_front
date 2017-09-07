import { Component, OnInit } from '@angular/core';
import { MainKitchenService } from './main-kitchen.service';

@Component({
  selector: 'app-main-kitchen',
  templateUrl: './main-kitchen.component.html',
  providers: [MainKitchenService]
})
export class MainKitchenComponent implements OnInit {
  public tables;

  constructor(private mainKitchenService: MainKitchenService) {}

  ngOnInit() {
    this.getTables();
  }

  private getTables() {
    this.mainKitchenService.getData().then(tables => {
      this.tables = tables;
      console.log(this.tables);
    });
  }
}
