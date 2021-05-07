var express = require('express')
var app = express()

app.use(express.static(__dirname))
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})

// endpoint /messages
app.get('/messages', (req, res) =>{
    res.send("hello")
})
