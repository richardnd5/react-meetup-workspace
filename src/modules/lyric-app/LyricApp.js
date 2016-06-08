import React, { Component }from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as lyricActions from './actions/lyricActions';

import LyricForm from './components/LyricForm';
import LyricList from './components/LyricList';

const LyricApp = ({state, actions}) => (
  <div>
    <h1>Title</h1>
    <LyricForm handleSubmit={actions.handleSubmit}/>
    {/*<LyricList />*/}
  </div>
)

export default connect(state => ({
}),
(dispatch) => ({
  actions: bindActionCreators(lyricActions, dispatch)
}))(LyricApp);
