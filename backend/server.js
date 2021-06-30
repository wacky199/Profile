const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ProfileMessage = require('./ProfileMessagesSchema.js');

require('dotenv').config();
const port =
    process.env.NODE_ENV === 'development'
        ? process.env.DEV_PORT
        : process.env.PORT;


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected!!');
});

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true, //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    // res.setHeader(
    //     'Access-Control-Allow-Headers',
    //     'Content-Type, Authorization'
    // );
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

const temp = [];

app.post('/contact/messages', (req, res) => {
    temp.push(req.body);
    console.log('Post Response');
    console.log(req.body);
    res.send(req.body);
    const newProfileMessage = new ProfileMessage(req.body); // creating instance

    newProfileMessage.save((err) => {
        if (err) {
            console.error('Oops, something happend!!!', err);
        } else {
            console.log('Data has been saved successfully!!!');
        }
    });
});

app.get('/contact/messages', (req, res) => {
    res.json(temp);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
