const express = require("express");
const app=express();
const cors=require("cors");
const port= process.env.PORT || 5029;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get("/",(req,res)=>{
 res.send("hey am shaw from alpha02.")
});
app.listen(port ,()=>{
    console.log(`Yey Server is running on http://localhost:${port}`);
}) 