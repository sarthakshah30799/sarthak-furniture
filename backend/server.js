const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const chairRouter = require('./route')
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/chairs', chairRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });


    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});