import { environment } from '../../../environments/environment';

export class BaseApiEndpoint {
  protected buildPath(...segments: string[]): string {
    return [environment.apiBaseUrl, ...segments].join('/');
  }
}
