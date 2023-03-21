import axios from 'axios';
import { Dispatch } from 'redux';
import Flower from '../Flowers.d';
import * as actionTypes from './flowerTypes';

const fetchFlowersRequest = () => ({
  type: actionTypes.FETCH_FLOWERS_REQUEST,
});

const fetchFlowersSuccess = (flowers: Flower[]) => ({
  type: actionTypes.FETCH_FLOWERS_SUCCESS,
  flowers: flowers,
});

const fetchFlowersFailure = (error: string) => ({
  type: actionTypes.FETCH_FLOWERS_FAIL,
  error: error,
});

export const fetchFlowers = () => (dispatch: Dispatch) => {
  dispatch(fetchFlowersRequest());
  axios
    .get('/flowers')
    .then((response) => dispatch(fetchFlowersSuccess(response.data.flowers)))
    .catch((error) => dispatch(fetchFlowersFailure(error.message)));
};
