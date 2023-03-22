import { Error } from '../../common/Error';
import { Flower, FavoriteFlower } from '../Flowers.d';

export const FETCH_FLOWERS_REQUEST = 'FETCH_FLOWERS_REQUEST';
export const FETCH_FLOWERS_SUCCESS = 'FETCH_FLOWERS_SUCCESS';
export const FETCH_FLOWERS_FAIL = 'FETCH_FLOWERS_FAIL';

export const FETCH_SEARCH_FLOWERS_REQUEST = 'FETCH_SEARCH_FLOWERS_REQUEST';
export const FETCH_SEARCH_FLOWERS_SUCCESS = 'FETCH_SEARCH_FLOWERS_SUCCESS';
export const FETCH_SEARCH_FLOWERS_FAIL = 'FETCH_SEARCH_FLOWERS_FAIL';

export const FETCH_FAVORITE_FLOWERS_REQUEST = 'FETCH_FAVORITE_FLOWERS_REQUEST';
export const FETCH_FAVORITE_FLOWERS_SUCCESS = 'FETCH_FAVORITE_FLOWERS_SUCCESS';
export const FETCH_FAVORITE_FLOWERS_FAIL = 'FETCH_FAVORITE_FLOWERS_FAIL';

export const REMOVE_FAVORITE_FLOWERS = 'REMOVE_FAVORITE_FLOWERS';

export const ADD_FAVORITE_FLOWER_REQUEST = 'ADD_FAVORITE_FLOWER_REQUEST';
export const ADD_FAVORITE_FLOWER_SUCCESS = 'ADD_FAVORITE_FLOWER_SUCCESS';
export const ADD_FAVORITE_FLOWER_FAIL = 'ADD_FAVORITE_FLOWER_FAIL';

export const REMOVE_FAVORITE_FLOWER_REQUEST = 'REMOVE_FAVORITE_FLOWER_REQUEST';
export const REMOVE_FAVORITE_FLOWER_SUCCESS = 'REMOVE_FAVORITE_FLOWER_SUCCESS';
export const REMOVE_FAVORITE_FLOWER_FAIL = 'REMOVE_FAVORITE_FLOWER_FAIL';

interface FetchFlowersRequestAction {
  type: typeof FETCH_FLOWERS_REQUEST;
}

interface FetchFlowersSuccessAction {
  type: typeof FETCH_FLOWERS_SUCCESS;
  flowers: Flower[];
}

interface FetchFlowersFailAction {
  type: typeof FETCH_FLOWERS_FAIL;
  error: Error;
}

interface FetchSearchFlowersRequestAction {
  type: typeof FETCH_SEARCH_FLOWERS_REQUEST;
}

interface FetchSearchFlowersSuccessAction {
  type: typeof FETCH_SEARCH_FLOWERS_SUCCESS;
  flowers: Flower[];
}

interface FetchSearchFlowersFailAction {
  type: typeof FETCH_SEARCH_FLOWERS_FAIL;
  error: Error;
}

interface FetchFavoriteFlowersRequestAction {
  type: typeof FETCH_FAVORITE_FLOWERS_REQUEST;
}

interface FetchFavoriteFlowersSuccessAction {
  type: typeof FETCH_FAVORITE_FLOWERS_SUCCESS;
  flowers: FavoriteFlower[];
}

interface FetchFavoriteFlowersFailAction {
  type: typeof FETCH_FAVORITE_FLOWERS_FAIL;
  error: Error;
}

interface RemoveFavoriteFlowers {
  type: typeof REMOVE_FAVORITE_FLOWERS;
}

interface AddFavoriteFlowerRequest {
  type: typeof ADD_FAVORITE_FLOWER_REQUEST;
}

interface AddFavoriteFlowerSuccess {
  type: typeof ADD_FAVORITE_FLOWER_SUCCESS;
}

interface AddFavoriteFlowerFail {
  type: typeof ADD_FAVORITE_FLOWER_FAIL;
  error: Error;
}

interface RemoveFavoriteFlowerRequest {
  type: typeof REMOVE_FAVORITE_FLOWER_REQUEST;
}

interface RemoveFavoriteFlowerSuccess {
  type: typeof REMOVE_FAVORITE_FLOWER_SUCCESS;
}

interface RemoveFavoriteFlowerFail {
  type: typeof REMOVE_FAVORITE_FLOWER_FAIL;
  error: Error;
}

export type FlowerActionTypes =
  | FetchFlowersRequestAction
  | FetchFlowersSuccessAction
  | FetchFlowersFailAction
  | FetchSearchFlowersRequestAction
  | FetchSearchFlowersSuccessAction
  | FetchSearchFlowersFailAction
  | FetchFavoriteFlowersRequestAction
  | FetchFavoriteFlowersSuccessAction
  | FetchFavoriteFlowersFailAction
  | RemoveFavoriteFlowers
  | AddFavoriteFlowerRequest
  | AddFavoriteFlowerSuccess
  | AddFavoriteFlowerFail
  | RemoveFavoriteFlowerRequest
  | RemoveFavoriteFlowerSuccess
  | RemoveFavoriteFlowerFail;
