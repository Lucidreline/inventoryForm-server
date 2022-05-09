const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
  attributes: {
    category: String,
    offShoulder: String,
    sleeveless: String,
    areShorts: Boolean,
    subCategory: String,
    productName: String,
    description: String,
    addMeasurmentsToDescription: Boolean,
    careInstructions: String,
    sku: String,
    image: String,
    stretchy: Boolean,
    adjustable: Boolean,
    colors: {
      black: Boolean,
      white: Boolean,
      grey: Boolean,
      brown: Boolean,
      beige: Boolean,
      navy: Boolean,
      pink: Boolean,
      red: Boolean,
      orange: Boolean,
      yellow: Boolean,
      green: Boolean,
      turquoise: Boolean,
      bluekpruple: Boolean,
      maroon: Boolean,
      metallic: Boolean,
      neon: Boolean,
    },
    size: {
      xs: Boolean,
      s: Boolean,
      m: Boolean,
      l: Boolean,
      xl: Boolean,
      twoX: Boolean,
      threeX: Boolean,
    },
    fit: {
      tightAndStretchy: Boolean,
      slimTailored: Boolean,
      looselyOversized: Boolean,
    },
    fiber: String,
  },
  measurements: {
    waistWidth: Number,
    shoulderWidth: Number,
    chestWidth: Number,
    sleeveLength: Number,
    bicepWidth: Number,
    garmetLength: Number,
    bottomHemSweep: Number,
    hipWidth: Number,
    thighWidth: Number,
    rise: Number,
    inseam: Number,
    outseam: Number,
    topOfChestToCrotch: Number,
  },
})

module.exports = mongoose.model('Clothing', clothingSchema)
