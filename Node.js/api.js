const client = require('./connection')
const express = require('express')

const app = express()

app.listen(3000,()=>{
    console.log("Server is listening at 3000")
})

client.connect()

app.get('/users',(req,res)=>{
    client.query('Select * from users' ,(err,result)=>{
        if(!err){
            res.send(result.rows)
        }else{
            console.log(err)
        }
    })
    client.end
})


app.get('/users/:id',(req,res)=>{
    console.log('ola')
    client.query(`Select * from users Where id=${req.params.id}`,(err,result)=>{
        if(!err){
            res.send(result.rows)
        }
    })
    client.end
})
const boduParser = require("body-parser")
app.use(boduParser.json())
app.post('/users',(req,res)=>{
    const user = req.body 
    let insertQuery = `Insert into users(id ,firstname , lastname , location)
    values(${user.id}, ${user.firstname},${user.lastname},${user.location})`
    client.query(insertQuery,(err,result)=>{
        if(!err){
            res.send("Insertion was sucessful")
        }else{
            console.log(err.message)
        }
    })
    client.end
})

app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       location = '${user.location}'
                       where id = ${user.id}`
    console.log(user.id)
    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})





