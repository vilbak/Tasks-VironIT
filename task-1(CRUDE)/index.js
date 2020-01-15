const express = require('express');
require('./src/db/mongoose');

const app = express();

const port = process.env.PORT || 3000;

const userRouter = require('./src/routers/users');

const taskRouter = require('./src/routers/task');

app.use(express.json());

app.use(userRouter);

app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
