const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const http = require('http')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors({origin: true, credentials: true}));

app.use(express.json());

let uri = 'mongodb+srv://ayush:ayush@cluster0.kuwbqhr.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
  

app.get('/', (req, res) => {

    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})

app.get('/getUser/:id', (req, res) => {

    const id = req.params.id;
    UserModel.findById({id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {

    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name, 
        lastName: req.body.lastName, 
        email: req.body.email, 
        mobile: req.body.mobile, 
        project: req.body.project
    }, {new:true})

    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {

    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})



// app.listen(3001, () => {
//     console.log('Server started');
// })
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));