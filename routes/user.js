const express = require('express');
const userControler = require('../controllers/user');

const router = express.Router();

router.post('/add-user', userControler.addUser );

router.get('/get-user', userControler.getUser );

router.delete('/delete-user/:id', userControler.deleteUser );

module.exports = router;