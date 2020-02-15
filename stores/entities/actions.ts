import { ActionCreator } from "redux";

export enum EntityActionTypes {
  UPDATE_ENTITY = "UPDATE_ENTITY",
  MERGE_ENTITIES = "MERGE_ENTITIES"
}

interface UpdateEntityAction {
  type: EntityActionTypes.UPDATE_ENTITY;
}

export const updateEntity: ActionCreator<UpdateEntityAction> = () => ({
  type: EntityActionTypes.UPDATE_ENTITY
});

interface MergeEntitiesAction {
  type: EntityActionTypes.MERGE_ENTITIES;
}

export const mergeEntities: ActionCreator<MergeEntitiesAction> = () => ({
  type: EntityActionTypes.MERGE_ENTITIES
});

export type EntityActions = UpdateEntityAction | MergeEntitiesAction;
