// paintingController.js

const Painting = require('../models/paintingModel'); // Assuming models.js is in the same directory

// Controller functions
const paintingController = {
  getAllPaintings: async (req, res) => {
    try {
      const paintings = await Painting.find();
      res.json(paintings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createPainting: async (req, res) => {
    const { name, description, poem, price, image } = req.body;
    
    try {
      const painting = await Painting.create({ name, description, poem, price, image });
      res.status(201).json(painting);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getPaintingById: async (req, res) => {
    try {
      const painting = await Painting.findById(req.params.id);
      if (!painting) {
        return res.status(404).json({ message: 'Painting not found' });
      }
      res.json(painting);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updatePainting: async (req, res) => {
    const { name, description, poem, price, image } = req.body;
    try {
      const updatedPainting = await Painting.findByIdAndUpdate(req.params.id, { name, description, poem, price, image }, { new: true });
      res.json(updatedPainting);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }, 

  deletePainting: async (req, res) => {
    try {
      const deletedPainting = await Painting.findByIdAndDelete(req.params.id);
      if (!deletedPainting) {
        return res.status(404).json({ message: 'Painting not found' });
      }
      res.json({ message: 'Painting deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = paintingController;
