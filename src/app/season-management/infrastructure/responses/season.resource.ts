export class SeasonResource {
  private fieldId: number;
  private cropId: number;
  private cropName: string;
  private status: string;
  private startedAt: string;
  private endedAt: string | null;

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

  public getFieldId(): number { return this.fieldId; }
  public getCropId(): number { return this.cropId; }
  public getCropName(): string { return this.cropName; }
  public getStatus(): string { return this.status; }
  public getStartedAt(): string { return this.startedAt; }
  public getEndedAt(): string | null { return this.endedAt; }
}
