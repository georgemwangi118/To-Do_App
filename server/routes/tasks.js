const router = require("express").Router();
const Task = require("../models/task");

//create
router.post("/", async (req, res) => {
  try {
    const newItem = new Task({
      item: req.body.item,
    });
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

//get
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.json(err);
  }
});

//update item
router.put("/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const task = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json(task);
  } catch (err) {
    res.json(err);
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    //find the item by its id and delete it
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
