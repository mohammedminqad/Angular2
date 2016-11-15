const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const localStaticPath = '../dist/client';
const reserve = require('./routes/reserve');
// const reviews = require('./routes/reviews');



app.use(express.static(path.resolve(__dirname, localStaticPath)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/reserve', reserve);
// app.use('/api/reviews', reviews);

app.use((req, res, next) => {
    if (req.originalUrl.indexOf('/api/') > -1) return next();
    res.sendFile(path.resolve('./client/index.html'));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Restaurant app is listening on port ${port}!`);
});