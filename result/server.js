const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Result = require('./models/result');
const app = express();

mongoose.connect('mongodb://localhost:27017/semv');

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/add', async (req, res) => {
    const data = new Result(req.body);
    await data.save();
    res.send('Data saved successfully');
});

app.get('/results', async (req, res) => {
    const results = await Result.find();
    res.json(results);
});

app.put('/update/:id', async (req, res) => {
    await Result.findByIdAndUpdate(req.params.id, req.body);
    res.send('Data updated');
});

app.delete('/delete/:id', async (req, res) => {
    await Result.findByIdAndDelete(req.params.id);
    res.send('Data deleted');
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
