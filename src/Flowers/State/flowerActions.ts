import axios from 'axios';
import { Dispatch } from 'redux';
import Flower from '../Flowers.d';
import * as actionTypes from './flowerTypes';

export const fetchFlowers = () => (dispatch: Dispatch) => {
  dispatch(fetchFlowersRequest());
  axios
    .get('https://flowrspot-api.herokuapp.com/api/v1/flowers')
    .then((response) => dispatch(fetchFlowersSuccess(response.data.flowers)))
    .catch((error) => dispatch(fetchFlowersFailure(error.message)));
};

export const fetchFlowersRequest = () => ({
  type: actionTypes.FETCH_FLOWERS_REQUEST,
});

export const fetchFlowersSuccess = (flowers: Flower[]) => ({
  type: actionTypes.FETCH_FLOWERS_SUCCESS,
  payload: flowers,
});

export const fetchFlowersFailure = (error: string) => ({
  type: actionTypes.FETCH_FLOWERS_FAILURE,
  payload: error,
});
