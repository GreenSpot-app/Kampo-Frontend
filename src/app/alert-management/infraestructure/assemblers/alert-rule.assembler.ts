import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { AlertRule } from '../../domain/model/alert-rule.entity';
import { AlertRuleResponse } from '../responses/alert-rule.response';
import { AlertRuleResource } from '../responses/alert-rule.resource';

@Injectable({ providedIn: 'root' })
export class AlertRuleAssembler extends BaseAssembler<AlertRule, AlertRuleResponse> {
  toEntityFromResponse(response: AlertRuleResponse): AlertRule {
    return new AlertRule(
      response.id,
      response.readingType,
      response.conditionOperator,
      response.severity,
      response.fieldsId,
    );
  }

  toResourceFromEntity(entity: AlertRule): AlertRuleResource {
    return {
      readingType: entity.getReadingType(),
      conditionOperator: entity.getConditionOperator(),
      severity: entity.getSeverity(),
      fieldsId: entity.getFieldsId(),
    };
  }
}
