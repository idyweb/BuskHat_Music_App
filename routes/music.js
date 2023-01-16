const express = require('express');
const router = express.Router();

let songs = [
    {
        title: 'Shape of You',
        artist: 'Ed Sheeran'
    },
    {
        title: 'Thinking Out Loud',
        artist: 'Ed Sheeran'
    },
    {
        title: 'Someone You Loved',
        artist: 'Lewis Capaldi'
    },
];

router.get('/',async (req,res)=> {
    res.json(songs);
});

router.post('/', async(req, res)=>{
    songs.push(req.body);
    res.json()
    res.send('Song added!');
});

router.delete('/:title',async (req,res)=>{
    songs.filter((song)=> song.title !== req.params.title);
    res.send('Song deleted');
});

module.exports = router;  