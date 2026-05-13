import { BaseEntity } from '../../../shared/infrastructure/base-entity';

export class AlertRule extends BaseEntity {
  private readingType: string;
  private conditionOperator: string;
  private severity: string;
  private fieldsId: number;

  constructor(
    id: number,
    readingType: string,
    conditionOperator: string,
    severity: string,
    fieldsId: number,
  ) {
    super(id);
    this.readingType = readingType;
    this.conditionOperator = conditionOperator;
    this.severity = severity;
    this.fieldsId = fieldsId;
  }

  getReadingType(): string {
    return this.readingType;
  }
  getConditionOperator(): string {
    return this.conditionOperator;
  }
  getSeverity(): string {
    return this.severity;
  }
  getFieldsId(): number {
    return this.fieldsId;
  }
}
