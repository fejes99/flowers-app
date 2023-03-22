import axios from 'axios';
import { Dispatch } from 'redux';
import { Flower, FavoriteFlower } from './../Flowers.d';
import * as actionTypes from './flowerTypes';

const fetchFlowersRequest = () => ({
  type: actionTypes.FETCH_FLOWERS_REQUEST,
});

const fetchFlowersSuccess = (flowers: Flower[]) => ({
  type: actionTypes.FETCH_FLOWERS_SUCCESS,
  flowers: flowers,
});

const fetchFlowersFail = (error: string) => ({
  type: actionTypes.FETCH_FLOWERS_FAIL,
  error: error,
});

export const fetchFlowers = () => (dispatch: Dispatch) => {
  dispatch(fetchFlowersRequest());
  axios
    .get('/flowers')
    .then((response) => dispatch(fetchFlowersSuccess(response.data.flowers)))
    .catch((error) => dispatch(fetchFlowersFail(error.message)));
};

const fetchSearchFlowersRequest = () => ({
  type: actionTypes.FETCH_FLOWERS_REQUEST,
});

const fetchSearchFlowersSuccess = (flowers: Flower[]) => ({
  type: actionTypes.FETCH_FLOWERS_SUCCESS,
  flowers: flowers,
});

const fetchSearchFlowersFail = (error: string) => ({
  type: actionTypes.FETCH_FLOWERS_FAIL,
  error: error,
});

export const fetchSearchFlowers = (query: string) => (dispatch: Dispatch) => {
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

const fetchFavoriteFlowersFail = (error: string) => ({
  type: actionTypes.FETCH_FAVORITE_FLOWERS_FAIL,
  error: error,
});

export const fetchFavoriteFlowers = (token: string) => (dispatch: Dispatch) => {
  dispatch(fetchFavoriteFlowersRequest());
  axios
    .get('/flowers/favorites', { headers: { Authorization: token } })
    .then((response) => dispatch(fetchFavoriteFlowersSuccess(response.data.fav_flowers)))
    .catch((error) => dispatch(fetchFavoriteFlowersFail(error)));
};

const removeFavorite = () => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWERS,
});

export const removeFavoriteFlowers = () => (dispatch: Dispatch) => {
  dispatch(removeFavorite());
};

const addFavoriteFlowerRequest = () => ({
  type: actionTypes.ADD_FAVORITE_FLOWER_REQUEST,
});

const addFavoriteFlowerSuccess = () => ({
  type: actionTypes.ADD_FAVORITE_FLOWER_SUCCESS,
});

const addFavoriteFlowerFail = (error: string) => ({
  type: actionTypes.ADD_FAVORITE_FLOWER_FAIL,
  error: error,
});

export const addFavoriteFlower = (token: string, flowerId: string) => (dispatch: Dispatch) => {
  dispatch(addFavoriteFlowerRequest());
  axios
    .post(`/flowers/${flowerId}/favorites`, {}, { headers: { Authorization: token } })
    .then((response) => dispatch(addFavoriteFlowerSuccess()))
    .catch((error) => dispatch(addFavoriteFlowerFail(error)));
};

const removeFavoriteFlowerRequest = () => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWER_REQUEST,
});

const removeFavoriteFlowerSuccess = () => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWER_SUCCESS,
});

const removeFavoriteFlowerFail = (error: string) => ({
  type: actionTypes.REMOVE_FAVORITE_FLOWER_FAIL,
  error: error,
});

export const removeFavoriteFlower =
  (token: string, flowerId: string, favoriteFlowerId: string) => (dispatch: Dispatch) => {
    dispatch(removeFavoriteFlowerRequest());
    axios
      .delete(`/flowers/${flowerId}/favorites/${favoriteFlowerId}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        dispatch(removeFavoriteFlowerSuccess());
        fetchFavoriteFlowers(token);
      })
      .catch((error) => dispatch(removeFavoriteFlowerFail(error)));
  };
