import { FundoResponse } from '../responses/fundo.response';
import { Fundo } from '../../domain/model/fundo.entity';

export class FundoAssembler {
  public static toEntityFromResponse(response: FundoResponse): Fundo {
    return new Fundo(
      response.id,
      response.name,
      response.organizationId,
      response.location,
      response.totalArea
    );
  }
}
