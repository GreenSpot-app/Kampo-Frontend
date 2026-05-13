import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeasonResponse } from '../responses/season.response';
import { SeasonResource } from '../responses/season.resource';

@Injectable({
  providedIn: 'root',
})
export class SeasonService {
  private readonly http = inject(HttpClient);
  private readonly resourcePath = 'http://localhost:3000/seasons';

  getByField(fieldId: number): Observable<SeasonResponse[]> {
    const params = new HttpParams().set('fieldId', String(fieldId));
    return this.http.get<SeasonResponse[]>(this.resourcePath, { params });
  }

  create(body: SeasonResource): Observable<SeasonResponse> {
    return this.http.post<SeasonResponse>(this.resourcePath, body);
  }

  assignCrop(seasonId: number, cropId: number): Observable<SeasonResponse> {
    return this.http.patch<SeasonResponse>(`${this.resourcePath}/${seasonId}`, { cropId });
  }

  updateStatus(seasonId: number, status: string): Observable<SeasonResponse> {
    return this.http.patch<SeasonResponse>(`${this.resourcePath}/${seasonId}`, { status });
  }

  endSeason(seasonId: number): Observable<SeasonResponse> {
    const now = new Date().toISOString();
    return this.http.patch<SeasonResponse>(`${this.resourcePath}/${seasonId}`, {
      status: 'Finalizada',
      endedAt: now
    });
  }
}
