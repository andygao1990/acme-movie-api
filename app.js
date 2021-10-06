const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
            The Acme Movie API
            </body>
        </html>
    `)
})

module.exports = app