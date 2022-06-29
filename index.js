const express = require('express')

const app = express()

const port = 8081

app.get('/', (req, res) => {
    const name = req?.query?.name 
    res.send(`Hello ${ name ?? 'human' }!`)
})

app.listen(port, () => console.log(`Server listening at port ${port}`))