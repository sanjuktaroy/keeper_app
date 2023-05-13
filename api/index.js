import express from "express"
import cors from "cors"
import mysql from "mysql"
import db from "./mysql.js"
import router from "./routes/posts.js"

const app = express(); //create object of type express
app.use(express.json());
app.use(cors());
app.use("/",router); //parent route is /

app.get("/createtable",(req,res) => {
    const q = 
    "CREATE TABLE sanjukta(id int primary key, title varchar(100) default 'No description',description varchar(250) default 'No description');";
    db.query(q, (err,data) => {
        if (err) return res.status(500).json(err); //500 - internal server error 
        else return res.status(200).json("Table created successfully!");
    });
});

app.listen(3001, () => {
    console.log("Server listening on PORT 3001...");
});