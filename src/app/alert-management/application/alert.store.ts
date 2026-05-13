import { Injectable, signal } from '@angular/core';
import { Alert } from '../domain/model/alert.entity';
import { AlertRule } from '../domain/model/alert-rule.entity';
import { AlertResource } from '../infraestructure/responses/alert.resource';
import { AlertApi } from '../infraestructure/alert.api';

@Injectable({ providedIn: 'root' })
export class AlertStore {
  private _alerts = signal<Alert[]>([]);
  private _alertRules = signal<AlertRule[]>([]);
  private _selectedAlertId = signal<number | null>(null);
  private _isLoading = signal<boolean>(false);

  alerts = this._alerts.asReadonly();
  alertRules = this._alertRules.asReadonly();
  selectedAlertId = this._selectedAlertId.asReadonly();
  isLoading = this._isLoading.asReadonly();

  constructor(private alertApi: AlertApi) {}

  getAlerts(): void {
    this._isLoading.set(true);
    this.alertApi.getAlerts().subscribe({
      next: (alerts) => {
        this._alerts.set(alerts);
        this._isLoading.set(false);
      },
      error: () => this._isLoading.set(false),
    });
  }

  getAlertRules(): void {
    this.alertApi.getAlertRules().subscribe({
      next: (rules) => this._alertRules.set(rules),
    });
  }

  sendAlert(resource: AlertResource): void {
    this.alertApi.sendAlert(resource).subscribe({
      next: (alert) => {
        this._alerts.update((list) => [...list, alert]);
      },
    });
  }

  markAlertRead(alertId: number): void {
    this.alertApi.markAlertRead(alertId).subscribe({
      next: (updated) => {
        this._alerts.update((list) =>
          list.map((a) => (a.getId() === updated.getId() ? updated : a)),
        );
      },
    });
  }

  selectAlert(id: number): void {
    this._selectedAlertId.set(id);
  }
}
