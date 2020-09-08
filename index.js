const express = require('express')
const app=express()

app.get('/', (req,res)=>{
    res.redirect("https://www.google.com")
})
app.listen(5000)