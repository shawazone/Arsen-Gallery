const requireAdmin = require('../middleware/requireAdmin');

// paintingRoutes.js

const express = require('express');
const router = express.Router();
const paintingController = require('../controllers/paintingController');

// Define painting routes
router.get('/painting', paintingController.getAllPaintings);
router.post('/painting',requireAdmin, paintingController.createPainting);
router.get('/painting/:id', paintingController.getPaintingById);
router.patch('/painting/:id',requireAdmin, paintingController.updatePainting);
router.delete('/painting/:id',requireAdmin, paintingController.deletePainting);

module.exports = router;
