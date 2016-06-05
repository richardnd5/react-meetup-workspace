import React from 'react';

const Comment = ({name, children}) => (
  <div>
    <h3>{name}</h3>
    <p>
      {children}
    </p>
  </div>
)

export default Comment;
