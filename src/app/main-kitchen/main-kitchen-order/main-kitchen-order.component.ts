import { Component, OnInit, Input } from '@angular/core';
import { MainKitchenService } from '../main-kitchen.service';
import * as moment from 'moment';

@Component({
  selector: 'app-main-kitchen-order',
  templateUrl: './main-kitchen-order.component.html'
})
export class MainKitchenOrderComponent implements OnInit {
  @Input() public table;
  constructor(private mainKitchenService: MainKitchenService) {}

  ngOnInit() {}

  public getClasses(order) {
    return {
      timeText: order.needTiming && !order.ready,
      done: order.done
    };
  }

  public cook(order) {
    if (order.ready && !order.done) {
      order.done = true;
    } else if (!order.ready) {
      order.ready = true;
      setInterval(() => order.timer++, 1000);
    }
  }
}
