const express = require('express')
const connectDB = require('./config/connectDB')
const User = require('./models/User')
const app=express()
require('dotenv').config({path:'./config/.env'})



app.use(express.json())
connectDB()

//create a users
app.post('/users/add',async(req,res) => {
    const {fullName,email,age}=req.body;
    const newUser = new User({
        fullName,
        email,
        age
    })
    try {
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send('post error')
    }
})

app.get('/users/get', async(req,res)=> {
    try {
        let newUsers = await User.find()
        res.send(newUsers)
    } catch (error) {
        res.send('get error')
    }
})

app.get('/users/get/:id', async(req,res)=>{
    try {
        let user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        res.send('get one error')
    }
})
app.delete('/users/delete/:id', async(req,res)=> {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send('user deleted')
    } catch (error) {
        res.send('get error')
    }
})

app.put('/users/update/:id', async(req,res) =>{
    try {
        let userUpdated = await User.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.send(userUpdated)
    } catch (error) {
        res.send('put error')
    }
})



const PORT = process.env.PORT || 5000
const server = app.listen(PORT,(err) =>err ? console.log(err) : console.log(`server running on port ${PORT}`))