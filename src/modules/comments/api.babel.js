import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Comment from './Comment';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

mongoose.connect('mongodb://localhost:27017/react-meetup', (err) => {
  if(err) console.error(err);
  console.log('Crushed It. Mango Fruits.')
});

app.get('/comments', (req, res) => {
  Comment.find().exec((err, comments) => {
    if(err) return res.send(err);
    res.send(comments);
  })
})

app.post('/comments', (req, res) => {
  let comment = new Comment(req.body)
  comment.save((err, comment) => {
    if(err) return res.send(err);
    res.send(comment);
  })

})

app.listen(PORT, (err) => {
  if(err) {
    console.error(err)
  }

  console.info(`app listening on http://localhost:${PORT}`);
})
