const express = require("express");
const Channel = require("../models/Channel");
require("dotenv").config();

// Configure router
const router = express.Router();

// GET all TV channels
router.get("/", async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (error) {
    res.json(error);
  }
});

// GET specific TV channel
router.get("/:channelId", async (req, res) => {
  try {
    const channel = await Channel.findOne({ _id: req.params.channelId });
    res.json(channel);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
