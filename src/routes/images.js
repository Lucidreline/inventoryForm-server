const express = require('express')
const cloudinary = require('../utils/cloudinary')

const router = express.Router()

router.post('/geturl', (req, res) => {
  try {
    res.header('Access-Control-Allow-Origin', '*')
    const fileStr = req.body.data
    cloudinary.uploader
      .upload(fileStr, {
        upload_preset: 'cfla-inventory',
      })
      .then((uploadRes) => res.json({ url: uploadRes.url }))
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
