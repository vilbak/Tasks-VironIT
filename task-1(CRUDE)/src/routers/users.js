const express = require('express');

const Users = require('../models/users');

const router = new express.Router();

router.post('/users', async (req, res) => {
  const user = new Users(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const users = await Users.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await Users.findByIdAndUpdate(_id, req.body, { new: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await Users.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
