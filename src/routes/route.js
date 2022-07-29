const express = require('express');
const router = express.Router();

const wordController = require('../controllers/wordController')



router.post('/Word',wordController.addWord)


router.get('/Word',wordController.getWord)





module.exports =router;




