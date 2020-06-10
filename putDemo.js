let express = require("express");
let app = express();
let hapi = require("@hapi/joi");
app.use(express.json());
let port = process.env.PORT || 4600;

let users =[{
    id : 1,
    name : "javascript"
},
{
    id : 2,
    name : "html"
},
{
    id : 3,
    name : "css"
},
{
    id : 4,
    name : "node"
}];

app.put(`/api/update/user/:id`,(req,res)=>{  
    let user = users.find((item)=>item.id===parseInt(req.params.id));
    if(!user){
         res.status(404).send({message:"invalid user"});
    }
        let schema = hapi.object({
            name : hapi.string().min(3).max(20).required()
        });
        let result = schema.validate(req.body);
        if(result.error){
           return res.send(result.error);
        }
        user.name = req.body.name;
        res.send(users);

});
app.listen(port,()=>console.log(`port is working on ${port}`));0