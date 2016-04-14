import mongoose, {Schema} from 'mongoose';

const commentSchema = new Schema({
  name: String,
  message: String
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
