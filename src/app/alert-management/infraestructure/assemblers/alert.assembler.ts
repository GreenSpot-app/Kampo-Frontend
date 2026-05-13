import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { Alert } from '../../domain/model/alert.entity';
import { AlertResponse } from '../responses/alert.response';
import { AlertResource } from '../responses/alert.resource';

@Injectable({ providedIn: 'root' })
export class AlertAssembler extends BaseAssembler<Alert, AlertResponse> {
  toEntityFromResponse(response: AlertResponse): Alert {
    return new Alert(
      response.id,
      response.message,
      response.priority,
      response.isRead,
      response.fieldsId,
      response.alertRulesId,
    );
  }

  toResourceFromEntity(entity: Alert): AlertResource {
    return {
      message: entity.getMessage(),
      priority: entity.getPriority(),
      fieldsId: entity.getFieldsId(),
      alertRulesId: entity.getAlertRulesId(),
    };
  }
}
