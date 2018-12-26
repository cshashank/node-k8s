const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const checkAuth = require('../middleware/check-auth');
// const Covenant = require('../models/covenant');


router.get("/",(req,res)=>{
    const response ={
                title: 'Covenant_01'
           }
    console.log('listening on 3000');       
    res.send(response);
});

module.exports = router;