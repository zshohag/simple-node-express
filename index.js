const express = require('express');
const cors = require('cors')
const app = express();



app.use(cors())
app.use(express.json())


const port = 5000;

/* const handler = (req,res) => {
    res.send('Hello,Z  From Node')
} */

app.get('/',(req,res) => {
    res.send('Hello, Z_SHOHAG  From Node')
})


const users =  [
    {id : 0, name :'zOne' ,email :'zOne@shohag.com',phone:'123456' },
    {id : 1, name :'zTwo' ,email :'zTwo@shohag.com',phone:'123456' },
    {id : 2, name :'zThree' ,email :'zThree@shohag.com',phone:'123456' },
    {id : 3, name :'zSix' ,email :'zSix@shohag.com',phone:'123456' },
    {id : 4, name :'zFour' ,email :'zFour@shohag.com',phone:'123456' },
    {id : 5, name :'zFive' ,email :'zFive@shohag.com',phone:'123456' }
]

app.get('/users',(req,res)=> {
     const search =   req.query.search
     // use query parameter 
     if(search){
          const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search)   )

          res.send(searchResult)
     }
     else {

         res.send(users)
     }
})

//  app.METHOD

app.post('/users', (req,res)=> {

    const newUser = req.body ;
    newUser.id = users.length ;
    users.push(newUser)

    console.log('hitting the post ' , req.body )

    //res.send(JSON.stringify(newUser))
    res.json(newUser)
})




// Dynamic API

app.get('/users/:id',(req,res)=> {

    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Good Taste')
})

app.get("/z/shohag/me",(req,res)=> {
    res.send('z shohag')
})


app.listen(port,()  => {
    console.log('listening to port ' , port )
});



