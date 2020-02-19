export enum EntityActionTypes {
  FETCH_ENTITIES = "FETCH_ENTITIES",
  FETCH_ENTITIES_SUCCESS = "FETCH_ENTITIES_SUCCESS"
}

export interface FetchEntitiesAction {
  type: EntityActionTypes.FETCH_ENTITIES;
  payload: {
    url: string;
    page: string;
  };
}

export const fetchEntities = (
  url: string,
  page: string
): FetchEntitiesAction => ({
  type: EntityActionTypes.FETCH_ENTITIES,
  payload: {
    url,
    page
  }
});

export interface FetchEntitiesSuccessAction {
  type: EntityActionTypes.FETCH_ENTITIES_SUCCESS;
  payload: {
    page: string;
    entities: {};
  };
}

export const fetchEntitiesSuccess = (
  page: string,
  entities
): FetchEntitiesSuccessAction => ({
  type: EntityActionTypes.FETCH_ENTITIES_SUCCESS,
  payload: {
    page,
    entities
  }
});

export type EntityActions = FetchEntitiesAction | FetchEntitiesSuccessAction;
