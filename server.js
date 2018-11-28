
const hbs = require('hbs')
const fs = require('fs')
const express = require('express')

//nusakome naudojamo porto numeri

const port = process.env.port || 4000

const app = express()

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');

hbs.registerHelper('time', () =>{

    return new Date().getDate
})



//app.use(express.static(__dirname + '/html'));

//prisijungimu fiksavimas

app.use((req, res, next) =>{

    const now = new Date().toString()
    const stamp= `${now} + ${req.method} + ${req.url}`

    fs.appendFileSync('server.log', stamp + '\n')

    next()
})

app.use(express.static(__dirname + '/views'));


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


