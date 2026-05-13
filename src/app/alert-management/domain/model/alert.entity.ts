import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class Alert extends BaseEntity {
  private message: string;
  private priority: string;
  private isRead: boolean;
  private fieldsId: number;
  private alertRulesId: number;

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

  getMessage(): string {
    return this.message;
  }
  getPriority(): string {
    return this.priority;
  }
  getIsRead(): boolean {
    return this.isRead;
  }
  getFieldsId(): number {
    return this.fieldsId;
  }
  getAlertRulesId(): number {
    return this.alertRulesId;
  }
}
