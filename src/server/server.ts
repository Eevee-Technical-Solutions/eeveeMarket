import express from 'express';
const path = require('path');
const app = express();


//import route handles from routes

const auctionRouter = require("./routes/auctionRouter.ts")

/**
 * handling parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));


// serve HTML page on /
app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/api', auctionRouter);


//default route handler
app.use('*', (req, res, next) => {
  res.sendStatus(400);
});

// default error handler 
app.use((error : object, request: any, response: any, next: any) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, error);
  console.log(errorObj.log);
  return response.status(errorObj.status).send(errorObj.message);
});

//listening on port 3000
app.listen(3000, () => {
  console.log('server started');
});
