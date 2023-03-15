import Flower from '../Flowers.d';

export const FETCH_FLOWERS_REQUEST = 'FETCH_FLOWERS_REQUEST';
export const FETCH_FLOWERS_SUCCESS = 'FETCH_FLOWERS_SUCCESS';
export const FETCH_FLOWERS_FAILURE = 'FETCH_FLOWERS_FAILURE';

export interface IFlowerState {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
}

interface FetchFlowersRequestAction {
  type: typeof FETCH_FLOWERS_REQUEST;
}

interface FetchFlowersSuccessAction {
  type: typeof FETCH_FLOWERS_SUCCESS;
  payload: Flower[];
}

interface FetchFlowersFailureAction {
  type: typeof FETCH_FLOWERS_FAILURE;
  payload: string;
}

export type FlowerActionTypes =
  | FetchFlowersRequestAction
  | FetchFlowersSuccessAction
  | FetchFlowersFailureAction;
