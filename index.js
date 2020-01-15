const express = require('express');
require('./src/db/mongoose');

const Users = require('./src/models/users');
const app = express();
const Task = require('./src/models/task');
const port = process.env.PORT || 3000;

app.post('/task', (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch(e => {
      res.status(400);
    });
});

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new Users(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});
app.get('/users', (req, res) => {
  Users.find({})
    .then(users => {
      res.send(users);
    })
    .catch(e => {});
});

app.get('/users/:id', (req, res) => {
  const _id = req.params.id;

  Users.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }

      res.send(user);
    })
    .catch(e => {
      res.status(500).send();
    });
});

app.get('/task', (req, res) => {
  Task.find({})
    .then(tasks => {
      res.send(tasks);
    })
    .catch(e => {
      res.send(e).status(404);
    });
});

app.get('/task/:id', (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then(task => {
      if (!task) {
        return res.status(400).send();
      }
      res.send(task);
    })
    .catch(e => {
      res.status(500).send(e);
    });
});
app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
