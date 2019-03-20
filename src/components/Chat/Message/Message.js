import React from 'react';
import moment from 'moment';

import './Mesage.css';

const format = 'DD.MM.YYYY в HH:mm';

const Message = (props) => {
  const { nickname, created, message } = props;
  
  return (
    <div className="card mb-1">
      <div className="card-body px-3 py-1">
        <h5 className="card-title mb-1">{nickname} <small className="text-muted">{moment(created).format(format)}</small></h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
};

export default Message;