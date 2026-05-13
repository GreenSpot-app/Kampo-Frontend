import { BaseResponse } from '../../../shared/infrastructure/base-response';

export class AlertRuleResponse extends BaseResponse {
  readingType: string;
  conditionOperator: string;
  severity: string;
  fieldsId: number;

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
}
