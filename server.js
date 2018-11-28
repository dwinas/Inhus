
const hbs = require('hbs')

const request = require('request')

const fs = require('fs')

const express = require('express')

//nusakome naudojamo porto numeri

const port = process.env.port || 4000

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('time', () =>{

    return new Date().getDate
})

const app = express()

//app.use(express.static(__dirname + '/html'));

//prisijungimu fiksavimas

app.use((req, res, next) =>{

    const now = new Date().toString()
    const stamp= `${now} + ${req.method} + ${req.url}`

    fs.appendFileSync('server.log', stamp + '\n')

    next()
})

app.get('/', (req, res) => {

    res.render('home.hbs')
})


app.get('/my-orders',(req, res) => {

    res.render('my-orders.hbs')
})

app.get('/order-now', (req, res) => {

    res.render('order-now.hbs')
})

app.get('/free-form', (req, res) => {

    res.render('free-form.hbs')
})



app.listen(port, () => {

    console.log(port)
})


