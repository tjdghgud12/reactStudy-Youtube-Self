const express = require('express')
const app = express()
const port = 5000
const { pg } = require('./models/modelUser')


pg.connect(err => {
    if (err) {
        console.log(err)
    } else { 
        console.log("Database Connecting Success")
    }
});

app.use(express.json());


app.use('/api/user', require('./Routes/userRoute'));





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})