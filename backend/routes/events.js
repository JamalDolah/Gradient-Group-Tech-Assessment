const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// GET /api/events/:id
router.get('/:id', (req, res) => {
  const eventId = req.params.id;
  const filePath = path.join(__dirname, '..', 'data', `event${eventId}.json`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Event not found' });
  }

  try {
    const eventData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(eventData);
  } catch (error) {
    console.error('Error reading event data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

