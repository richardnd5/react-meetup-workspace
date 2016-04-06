import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let comments = [
  {
    name: 'john smith',
    message: 'hello world'
  }
]

app.get('/comments', (req, res) => {

  res.send(comments)

})

app.post('/comments', (req, res) => {

  // const comment = req.
  // res.send(req)

  console.log(req)

  res.send(req.body)

})

app.listen(PORT, (err) => {
  if(err) {
    console.error(err)
  }

  console.info(`app listening on http://localhost:${PORT}`)
})
