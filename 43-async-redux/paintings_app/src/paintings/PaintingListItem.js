import React from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions'

const PaintingListItem = (props) => {
  // console.log('props', props);
  return (
    <div onClick={() => {
      props.selectPainting(props.painting.id)
    }} className="ui item">
      <span style={{ cursor: 'pointer' }}>{props.painting.title}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectPainting: (painting) => dispatch(selectPainting(painting))
//   }
// }

export default connect(null, actions)(PaintingListItem)
