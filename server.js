const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Welcome to BuskHat!');
});

app.listen(port, () => {
    console.log('Server running on http://localhost:${port}');
});

// mount the music routes
const musicRoutes = require('./routes/music');
app.use('/music', musicRoutes) 