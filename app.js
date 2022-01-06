const express = require('express')
const app = express()
const port = 3000
const restaurantList = require('./restaurant.json').results

const exphb = require('express-handlebars')
app.engine('handlebars', exphb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// index page
app.get('/', (req, res) => {
  res.render('index', { restaurantList })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})