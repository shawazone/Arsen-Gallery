// paintingRoutes.js

const express = require('express');
const router = express.Router();
const paintingController = require('../controllers/paintingController');

// Define painting routes
router.get('/painting', paintingController.getAllPaintings);
router.post('/painting', paintingController.createPainting);
router.get('/painting/:id', paintingController.getPaintingById);
router.put('/painting/:id', paintingController.updatePainting);
router.delete('/painting/:id', paintingController.deletePainting);

module.exports = router;
