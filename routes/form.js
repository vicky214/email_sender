const express = require('express')
const router = express.Router()
const mongoose= require('mongoose');
const Form = require('../models/form')
const nodemailer = require("nodemailer");
require('dotenv').config()

router.post('/data',(req,res)=>{
    const {name,phone,email} = req.body;
    if(!name || !phone || !email){
        res.json({error:"Please Add All The Fields"})
    }
    if(phone.length==10){
    const formData ={
        name,
        phone,
        email
    }
    Form.create(formData)
    .then(data=>{
        var transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL, // generated ethereal user
              pass: process.env.PASSWORD, // generated ethereal password
            },
          });
          var mailinfo = transporter.sendMail({
            from: 'vicky214kumar@gmail.com', // sender address
            to: email, // list of receivers admin@scizers.com
            subject: "Details Of User", // Subject line
            text:'text', // plain text body
            html:`Name: ${name},<br> Phone: ${phone}`
          });
          transporter.sendMail(mailinfo,function(err,data){
              if(err){
                  console.log('errors')
              }
              else{
                  console.log('Email sent')
              }
          })
        res.json({message:'Success Message'})
    })
    .catch(err=>{
        res.json({error:"Unsuccessful Message"})
    })
    }
    else{
        return res.json({error:"Password Length should be equal to 10"})
    }

})



module.exports = router;