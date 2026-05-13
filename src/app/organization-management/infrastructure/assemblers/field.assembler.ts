import { FieldResponse } from '../responses/field.response';
import { Field } from '../../domain/model/field.entity';

export class FieldAssembler {
  public static toEntityFromResponse(response: FieldResponse): Field {
    return new Field(
      response.id,
      response.name,
      response.fundoId,
      response.area,
      response.soilType,
      response.irrigationType
    );
  }
}
