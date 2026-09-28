// import express from 'express'
// import fs from 'fs'

// const data = fs.readFileSync("index.html", "utf8");
// const app = express()

// app.get('/home', (req, res) => {
//    res.send(data);
// })
// const port = 3000
// app.listen(port,()=>{
//     console.log("server is running..")  
// }) 

import express from 'express'
import fs from 'fs'

const app = express()
const book = fs.readFileSync("./data/books.json")
app.get("/api/v1/books", (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            count: bookData.length,
            data: {     
                book: bookData
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }
})

const port = 3000
app.listen(port, () => {
    console.log("server is running..")
}) 