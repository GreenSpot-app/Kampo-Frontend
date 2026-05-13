import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class AlertResponse extends BaseResponse {
  message: string;
  priority: string;
  isRead: boolean;
  fieldsId: number;
  alertRulesId: number;

  constructor(
    id: number,
    message: string,
    priority: string,
    isRead: boolean,
    fieldsId: number,
    alertRulesId: number,
  ) {
    super(id);
    this.message = message;
    this.priority = priority;
    this.isRead = isRead;
    this.fieldsId = fieldsId;
    this.alertRulesId = alertRulesId;
  }
}
