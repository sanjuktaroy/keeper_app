import express from "express"
import cors from "cors"
import mysql from "mysql"
import db from "./mysql.js"
import router from "./routes/posts.js"

const app = express(); //create object of type express
app.use(express.json());
app.use(cors());
app.use("/",router); //parent route is /

// app.get("/createtable",(req,res) => {
//     const q = 
//     "CREATE TABLE sanjukta(id int primary key, title varchar(100) default 'No description',description varchar(250) default 'No description');";
//     db.query(q, (err,data) => {
//         if (err) return res.status(500).json(err); //500 - internal server error 
//         else return res.status(200).json("Table created successfully!");
//     });
// });

//for adding a note
app.post("/addnote",(req,res) => {
    const q = "INSERT INTO sanjukta(`id`,`title`,`description`) VALUES(?);";
    const val = [req.body.id, req.body.title, req.body.description];
    console.log(val);
    db.query(q, [val], (err,data) => {
        if(err) return res.status(500).json(err);
        else return res.status(200).json("Value added successfully!");
    }); 
});

//getting all the notes
app.get("/getnotes", (req,res) => {
    const q = "SELECT * FROM sanjukta;";
    db.query(q,(err,data) => {
        if(err) return res.status(500).json(err);
        else return res.status(200).json(data);
    })
});

//deleting a note
app.get("/deletenote/:id", (req,res) => {
    const q = `DELETE FROM sanjukta WHERE id='${req.params.id}';`;
    db.query(q,(err,data) => {
        if(err) return res.status(500).json(err);
        else return res.status(200).json("Note deleted successfully!");
    })
});

//updating a note
app.get("/updatenote", (req,res) => {
    const q = `UPDATE sanjukta SET title='${req.body.title}', description='${req.body.description}' WHERE id=${req.body.id};`;
    db.query(q,(err,data) => {
        if(err) return res.status(500).json(err);
        else return res.status(200).json("Note updated successfully!");
    })
});

app.listen(3001, () => {
    console.log("Server listening on PORT 3001...");
});

setInterval(() => db.query("select 1"), 10000); //to keep server active, it calls the function every 10s