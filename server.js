console.log('My-Notes Server');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3030;
const app = express();


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

app.use(bodyParser.json());

const noteRoutes = require('./api/note/note.routes');

app.use('/api/note', noteRoutes);

app.listen(PORT, console.log(`App listening on port ${PORT}`))