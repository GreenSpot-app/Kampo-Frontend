export class SeasonResource {
  fieldId: number;
  cropId: number;
  cropName: string;
  status: string;
  startedAt: string;
  endedAt: string | null;

  constructor(
    fieldId: number,
    cropId: number,
    cropName: string,
    status: string,
    startedAt: string,
    endedAt: string | null
  ) {
    this.fieldId = fieldId;
    this.cropId = cropId;
    this.cropName = cropName;
    this.status = status;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
  }
}
