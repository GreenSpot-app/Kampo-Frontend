import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { Season} from '../../domain/model/season.entity';
import { SeasonStatus } from '../../domain/model/season-status.enum';
import { SeasonResponse } from '../responses/season.response';

export class SeasonAssembler extends BaseAssembler<Season, SeasonResponse> {
  toEntityFromResponse(response: SeasonResponse): Season {
    const startedAt = response.startedAt ? new Date(response.startedAt) : new Date();
    const endedAt = response.endedAt ? new Date(response.endedAt) : null;
    return new Season(
      response.id,
      response.fieldId,
      response.cropId,
      response.cropName,
      response.status as SeasonStatus,
      startedAt,
      endedAt
    );
  }
}
