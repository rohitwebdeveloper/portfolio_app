const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 8000;


require('./db/connect');
const Customer = require('./model/contact');


// Path


const template_Path = path.join(__dirname, "../template/views");
const partial_Path = path.join(__dirname, "../template/partials");
const static_Path = path.join(__dirname, "../public");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.set('views', template_Path);
hbs.registerPartials(partial_Path);

app.use(express.static(static_Path));



app.get('/', (req, res) => {
    res.render('index');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.post('/register', async (req, res) => {
    try {
        const customerone = new Customer({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        const result = await customerone.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const userdetail = await Customer.findOne({ username:username });
        if (userdetail.password==password) {
            res.status(201).render('index');
        } else {
            res.send("invalid login details");
        }

    } catch (error) {
        res.status(400).send('invalid login details')
    }
})



app.listen(port, () => {
    console.log(`the server is running on ${port}`);
})