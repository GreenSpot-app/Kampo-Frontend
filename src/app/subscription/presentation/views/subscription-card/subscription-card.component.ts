import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from '../../../domain/model/subscription.entity';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.css']
})
export class SubscriptionCardComponent implements OnInit {

  @Input() subscription!: Subscription;
  @Output() onSelect = new EventEmitter<number>();

  ngOnInit(): void {}

  showStatus(): string {
    return this.subscription.getStatus();
  }
}
