import { CropResponse } from '../responses/crop.response'; // O donde lo tengas ubicado
import { Crop } from '../../domain/model/crop.entity';

export class CropAssembler {
  public static toEntityFromResponse(response: CropResponse): Crop {
    return new Crop(
      response.id,
      response.name,
      response.scientificName,
      response.variety,
      response.growthCycle
    );
  }
}
