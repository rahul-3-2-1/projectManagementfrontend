import React from 'react';
import History from '../History/History';
import {HistoyDataRender} from '../History/History';

function Activity(props) {
  // console.log(projectId);
  console.log(props);
  return (
        <HistoyDataRender project  projectId={props?.ProjectId}/>
  )
}

export default Activity