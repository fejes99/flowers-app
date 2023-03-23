import axios from 'axios';

import { AppDispatch } from '../../store/store';
import * as actionTypes from './flowerTypes';
import { Flower, FavoriteFlower, FetchFlowersData } from './../Flowers.d';
import Error from '../../common/Error';

const fetchFlowersRequest = () => ({
  type: actionTypes.FETCH_FLOWERS_REQUEST,
});

const fetchFlowersSuccess = (fetchFlowersData: FetchFlowersData) => ({
  type: actionTypes.FETCH_FLOWERS_SUCCESS,
  flowers: fetchFlowersData.flowers,
  pagination: fetchFlowersData.meta.pagination,
});

const fetchFlowersFail = (error: Error) => ({
  type: actionTypes.FETCH_FLOWERS_FAIL,
  error: error,
});

export const fetchFlowers = (page: number) => (dispatch: AppDispatch) => {
  dispatch(fetchFlowersRequest());
  axios
    .get('/flowers', { params: { page: page } })
    .then((response) => dispatch(fetchFlowersSuccess(response.data)))
    .catch((error) => dispatch(fetchFlowersFail(error.message)));
};

const fetchSearchFlowersRequest = () => ({
  type: actionTypes.FETCH_FLOWERS_REQUEST,
});

const fetchSearchFlowersSuccess = (flowers: Flower[]) => ({
  type: actionTypes.FETCH_FLOWERS_SUCCESS,
  flowers: flowers,
});

const fetchSearchFlowersFail = (error: Error) => ({
  type: actionTypes.FETCH_FLOWERS_FAIL,
  error: error,
});

export const fetchSearchFlowers = (query: string) => (dispatch: AppDispatch) => {
  dispatch(fetchSearchFlowersRequest());
  axios
    .get('/flowers/search', { params: { query: query } })
    .then((response) => dispatch(fetchSearchFlowersSuccess(response.data.flowers)))
    .catch((error) => dispatch(fetchSearchFlowersFail(error.message)));
};

const fetchFavoriteFlowersRequest = () => ({
  type: actionTypes.FETCH_FAVORITE_FLOWERS_REQUEST,
});

const fetchFavoriteFlowersSuccess = (flowers: FavoriteFlower[]) => ({
  type: actionTypes.FETCH_FAVORITE_FLOWERS_SUCCESS,
  flowers: flowers,
});

const fetchFavoriteFlowersFail = (error: Error) => ({
  type: actionTypes.FETCH_FAVORITE_FLOWERS_FAIL,
  error: error,
});

export const fetchFavoriteFlowers = (token: string) => (dispatch: AppDispatch) => {
  dispatch(fetchFavoriteFlowersRequest());
  axios
    .get('/flowers/favorites', { headers: { Authorization: token } })
    .then((response) => dispatch(fetchFavoriteFlowersSuccess(response.data.fav_flowers)))
    .catch((error) => dispatch(fetchFavoriteFlowersFail(error)));
};

const removeFavorite = () => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWERS,
});

export const removeFavoriteFlowers = () => (dispatch: AppDispatch) => {
  dispatch(removeFavorite());
};

const addFavoriteFlowerRequest = () => ({
  type: actionTypes.ADD_FAVORITE_FLOWER_REQUEST,
});

const addFavoriteFlowerSuccess = () => ({
  type: actionTypes.ADD_FAVORITE_FLOWER_SUCCESS,
});

const addFavoriteFlowerFail = (error: Error) => ({
  type: actionTypes.ADD_FAVORITE_FLOWER_FAIL,
  error: error,
});

export const addFavoriteFlower = (token: string, flowerId: string) => (dispatch: AppDispatch) => {
  dispatch(addFavoriteFlowerRequest());
  return axios
    .post(`/flowers/${flowerId}/favorites`, {}, { headers: { Authorization: token } })
    .then((response) => dispatch(addFavoriteFlowerSuccess()))
    .catch((error) => dispatch(addFavoriteFlowerFail(error)));
};

export const addFavoriteFlowerAndFetchFavoriteFlowers =
  (token: string, flowerId: string) => async (dispatch: AppDispatch) => {
    await dispatch(addFavoriteFlower(token, flowerId));
    dispatch(fetchFavoriteFlowers(token));
  };

const removeFavoriteFlowerRequest = () => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWER_REQUEST,
});

const removeFavoriteFlowerSuccess = () => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWER_SUCCESS,
});

const removeFavoriteFlowerFail = (error: Error) => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWER_FAIL,
  error: error,
});

export const removeFavoriteFlower =
  (token: string, flowerId: string, favoriteFlowerId: string) => (dispatch: AppDispatch) => {
    dispatch(removeFavoriteFlowerRequest());
    return axios
      .delete(`/flowers/${flowerId}/favorites/${favoriteFlowerId}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        dispatch(removeFavoriteFlowerSuccess());
      })
      .catch((error) => dispatch(removeFavoriteFlowerFail(error)));
  };

export const removeFavoriteFlowerAndFetchFavoriteFlowers =
  (token: string, flowerId: string, favoriteFlowerId: string) => async (dispatch: AppDispatch) => {
    await dispatch(removeFavoriteFlower(token, flowerId, favoriteFlowerId));
    dispatch(fetchFavoriteFlowers(token));
  };
