
const router=require('express').Router();

const { getMovie } = require('../controls/moviecontrol');


router.route('/movie/:id').get(getMovie)

module.exports=router;