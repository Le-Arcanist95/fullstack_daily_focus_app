// Import modules
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const { expressjwt } = require('express-jwt');
const { PORT, MONGO_URI } = process.env;

// Middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to MongoDB'));

// Routes
app.use('/auth', require('./routes/authRouter'));
app.use('/api', expressjwt({secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ['HS256']}));
app.use('/api/journal', require('./routes/entryRouter.js'));
app.use('/api/todo', require('./routes/todoRouter.js'));

// Error handler
app.use((err, req, res, next) => {
    console.log(err);
    if(err.name === 'UnauthorizedError'){
        res.status(err.status);
    }
    return res.send({errMsg: err.message});
});

// Listen
mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});