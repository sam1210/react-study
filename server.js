const express = require('express')
const app = express()

app.listen('3000', () => {
	console.log('## Webserver has started.', 'http://localhost:3000/')
})

app.use('/', express.static('./public'))
app.use('/Login', express.static('./public'))
