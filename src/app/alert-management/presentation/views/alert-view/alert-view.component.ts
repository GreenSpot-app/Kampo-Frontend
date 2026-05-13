import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertListComponent } from '../alert-list/alert-list.component';
import { AlertRuleFormComponent } from '../alert-rule-form/alert-rule-form.component';
import { MatButtonModule } from '@angular/material/button';
import { AlertStore } from '../../../application/alert.store';

@Component({
  selector: 'app-alert-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule, AlertListComponent, AlertRuleFormComponent],
  templateUrl: './alert-view.component.html',
  styleUrl: './alert-view.component.css',
})
export class AlertViewComponent implements OnInit {
  showForm = false;

  constructor(public store: AlertStore) {}

  ngOnInit(): void {
    this.store.getAlerts();
    this.store.getAlertRules();
  }

  onConfigureAlertRule(): void {
    this.showForm = true;
  }

  onMarkAlertRead(id: number): void {
    this.store.markAlertRead(id);
  }

  onSelectAlert(id: number): void {
    this.store.selectAlert(id);
  }
}
