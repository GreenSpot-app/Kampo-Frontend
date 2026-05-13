export class SeasonResponse {
  private id: number;
  private fieldId: number;
  private cropId: number;
  private cropName: string;
  private status: string;
  private startedAt: string;
  private endedAt: string | null;

  constructor() {
    this.id = 0;
    this.fieldId = 0;
    this.cropId = 0;
    this.cropName = '';
    this.status = '';
    this.startedAt = '';
    this.endedAt = null;
  }

  public getId() { return this.id; }
  public getFieldId() { return this.fieldId; }
  public getCropId() { return this.cropId; }
  public getCropName() { return this.cropName; }
  public getStatus() { return this.status; }
  public getStartedAt() { return this.startedAt; }
  public getEndedAt() { return this.endedAt; }
}

export class SeasonResource {
  private fieldId: number;
  private cropId: number;
  private cropName: string;
  private status: string;
  private startedAt: string;
  private endedAt: string | null;

  constructor(fieldId: number, cropId: number, cropName: string, status: string, startedAt: string, endedAt: string | null) {
    this.fieldId = fieldId;
    this.cropId = cropId;
    this.cropName = cropName;
    this.status = status;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
  }
}
