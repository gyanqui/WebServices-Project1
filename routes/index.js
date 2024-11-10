const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello Hello world');});

module.exports = router;