const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Hello GET to Signin'
    })
});

router.get('/:id', (req, res, next)=>{
    
    const id = req.params.id;
    
    res.status(200).json({
        message: 'Got ' + id
    })
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: 'Hello POST to Signin'
    })
});

module.exports = router;