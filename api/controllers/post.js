import express from "express"
import db from "../mysql.js"

export const createPost = (req,res) => {
    const q = "INSERT INTO sanjukta(`id`,`title`,`description`,`category`) VALUES(?);";
    const data = [req.body.id, 
        req.body.title,
        req.body.description,
        req.body.category,
    ];
    //console.log(data);
    db.query(q,[data], (err,data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json("New post created successfully!");
    })
}; 

export const fetchPost = (req,res) => {
    const q = "SELECT * FROM sanjukta;"; 
    db.query(q, (err,data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json(data);
    })
}; 

export const fetchPostByCategory = (req,res) => {
    const q = `SELECT * FROM sanjukta WHERE category = '${req.params.category}';`; 
    db.query(q, (err,data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json(data);
    })
}; 

export const deletePost = (req,res) => {
    const q = "DELETE FROM sanjukta WHERE id=?"; 
    db.query(q, req.body.id, (err,data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json("Deleted successfully.");
    })
}; 

export const updatePost = (req,res) => {
    const q = `UPDATE sanjukta SET title='${req.body.title}',description='${req.body.description}' WHERE id='${req.body.id}';`; 
    db.query(q, (err,data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json("Updated successfully!");
    })
}; 