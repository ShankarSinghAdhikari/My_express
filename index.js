const express = require('express')
const path = require('path')
const app = express()
const port = 2000

//custom middleware

// const harshMiddleware = (req,res,next)=>{
//   console.log(req)
//   next()
//   //fro next middleware
// } 

app.use(express.static(path.join(__dirname, "Public")))
// app.use(harshMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})
app.get('/about', (req, res) => {
  //res.send('about');
  // res.sendFile(path.join(__dirname, 'Public/index.html'))
  // res.status(500)
  res.json({"harry": 34})
})
//install extention json formater

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

