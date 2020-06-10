let express = require("express");
let app = express();
let hapi = require("@hapi/joi");
let port = 4500;
app.use(express.json());

let users =[{
    id : 1,
    name : "Shraddha"
},
{
    id : 2,
    name : "Prathamesh"
},
{
    id : 3,
    name : "Shubham"
},
{
    id : 4,
    name : "Nikita"
}];

app.post(`/api/add/newUser`,(req,res)=>{
    let schema = hapi.object({
        name : hapi.string().min(3).max(20).required()
    });

    let result = schema.validate(req.body);
    if(result.error){
        return res.send(result.error.details[0].message);
    }

    let user ={
        id : users.length + 1,
        name : req.body.name
    }
    users.push(user);
    res.send(users);
});
app.listen(port,()=>console.log(`port is working on ${port}`));