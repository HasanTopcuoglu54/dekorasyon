const express = require('express')
const path = require('path')
const app = express()
const version = require('./package.json').version
const PORT = 5000

app.use('/src', express.static(path.join(__dirname, 'src')))
app.use('/managment', express.static(path.join(__dirname, 'managment')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
}).listen(PORT, () => {
    console.log(`
\\--\\    /--/
 \\  \\  /  /
  \\  \\/  /
   \\    /
    \\__/
`)
    console.log(`Visage.JS App`)
    console.log(`Version: ${version}`)
    console.log('host:', 'localhost:5000/')
})
