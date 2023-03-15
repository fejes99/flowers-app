import React from 'react';
import { connect } from 'react-redux';
import { flowerTestAction } from '../store/actions/flowerActions';

const test = (props: any) => {
  return <button onClick={props.onFlowerTest}>test</button>;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFlowerTest: () => dispatch(flowerTestAction()),
  };
};

export default connect(null, mapDispatchToProps)(test);
