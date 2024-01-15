
const express= require("express");
const Db = require("./Db");
const cors =require("cors");
const app =express();
app.use(cors());
app.use(express.json());

const port= process.env.PORT || 5002;
app.post("/Login",async(req,res)=>
{
    try {
        console.log("this is the username",req.body.username);
        const result= await Db.query("select * from cashier where username=$1 and password=$2",[req.body.username,req.body.password]);
        res.status(200).json
        (
            {
                status:"success",
                result:result.rowCount,
                data:{
                    user:result.rows[0]
                }
            }
        )
        // console.log (result);
    } catch (error) {
        
    }
})

app.listen (port,()=>{
    console.log(`server is up and listening on port ${port} `);
})