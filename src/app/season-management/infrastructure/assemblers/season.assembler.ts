import { SeasonResponse } from '../responses/season.response';
import { SeasonResource } from '../responses/season.resource';
import { Season } from '../../domain/model/season.entity';
import { SeasonStatus } from '../../domain/model/season-status.enum';

export class SeasonAssembler {

  public static toEntityFromResponse(response: SeasonResponse): Season {
    const startedAt = response.getStartedAt() ? new Date(response.getStartedAt()) : new Date();
    const endedAt = response.getEndedAt() ? new Date(response.getEndedAt()!) : null;

    return new Season(
      response.getId(),
      response.getFieldId(),
      response.getCropId(),
      response.getCropName() ?? '',
      SeasonAssembler.parseStatus(response.getStatus()),
      startedAt,
      endedAt
    );
  }

  public static toResourceFromEntity(entity: Season): SeasonResource {
    return new SeasonResource(
      entity.getFieldId(),
      entity.getCropId(),
      entity.getCropName(),
      entity.getStatus(),
      entity.getStartedAt().toISOString(),
      entity.getEndedAt() ? entity.getEndedAt()!.toISOString() : null
    );
  }

  private static parseStatus(value: string): SeasonStatus {
    const allowed = Object.values(SeasonStatus) as string[];
    return allowed.includes(value) ? (value as SeasonStatus) : SeasonStatus.PLANTING;
  }
}
