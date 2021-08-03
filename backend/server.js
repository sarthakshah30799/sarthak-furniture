const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const chairRouter = require('./route')
const AWS = require("aws-sdk")

AWS.config.update({ region: 'ap-south-1', accessKeyId: "AKIAURJ7EJN4MBVFZF5E", secretAccessKey: "hATxsovJxffb+wOXvBFWMuOygIh6bmV769wKFrtJ" });

s3 = new AWS.S3({ apiVersion: '2006-03-01' });

var bucketParams = {
    Bucket: 'sf-sample-images',
};

// s3.listObjects(bucketParams, function (err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log("Success", data);
// });
s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Buckets);
    }
});
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