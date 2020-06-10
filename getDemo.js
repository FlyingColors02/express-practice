let express = require("express");
let app = express();
let port = process.env.PORT || 4700;

//api which shows "hello user" on browser canvas
app.get("/api",(req,res)=>{
    res.send("hello user!!!");
});

//api to show "hello" on browser canvas
app.get(`/api/course`,(req,res)=>{
    res.send("hello!!");
});

//api to display the parameter(id) given on URL
app.get(`/api/work/:id`,(req,res)=>{
    res.send(req.params.id);  //will print the id we type in url on canvas 
});

//display multiple parameter given on URL
 app.get(`/api/display/:year/:month/:date`,(req,res)=>{
     res.send(req.params);
});

let users=[{
    id: 1,
    name: "ABCD",
},
{
    id:2,
   name: "LMN",
},
{
    id: 3,
    name: "XYZ",
},
{
    id: 4,
    name: "EFG"
}
];

 app.get("/api/Users",(req,res)=>{
     res.send(users);
});

//display specific user data using id in url
app.get(`/api/find/usingId/:id`,(req,res)=>{
    let user= users.find((data)=>data.id===parseInt(req.params.id));
    if(!user){
        return res.status(404).send({message:"invalid user!!"});
    }
    else{
        res.send(user);
    }
}); 
app.listen(port,()=>console.log(`port is working on ${port}`));





let songs=[{
    id:1,
    name:"abhi mujhme kahi",
},
{
    id:2,
    name:"bhighi si bhagi si",
},
{
    id:3,
    name:"nagada",
}];

app.get(`/api/find/songsById/:id`,(req,res)=>{
    let song=songs.find((item)=>item.id===parseInt(req.params.id));
    if(!song){
        res.status(404).send({message:"invalid song!!!"});
    }
    else{
        res.send(song);
    }
});
