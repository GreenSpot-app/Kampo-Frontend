export abstract class BaseAssembler <TEntity, TResponse> {
  abstract toEntityFromResponse(response: TResponse): TEntity;

  toEntitiesFromResponse(responses: TResponse[]): TEntity[]{
    return responses.map((r) => this.toEntityFromResponse(r));
  }

}
