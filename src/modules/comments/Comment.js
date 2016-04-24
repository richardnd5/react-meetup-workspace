<<<<<<< HEAD
import React from 'react';

const Comment = ({name, children}) => (
  <div>
    <h3>{name}</h3>
    <p>
      {children}
    </p>
  </div>
)
=======
import mongoose, {Schema} from 'mongoose';

const commentSchema = new Schema({
  name: String,
  message: String
});

const Comment = mongoose.model('Comment', commentSchema);
>>>>>>> Kikoku/master

export default Comment;
