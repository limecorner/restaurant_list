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

// show page
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  const restaurant = restaurantList.find(restaurant => restaurant.id.toString() === id)
  res.render('show', { restaurant })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})