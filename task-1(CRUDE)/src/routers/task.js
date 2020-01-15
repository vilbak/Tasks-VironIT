const express = require('express');

const Task = require('../models/task');

const router = new express.Router();

router.post('/task', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/task', async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/task/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = Task.findById(_id);
    if (!task) {
      res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/task/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, { new: true });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    return res.status(404).send();
  }
});

router.delete('/task/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = Task.findOneAndDelete(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    return res.status(404).send();
  }
});

module.exports = router;
