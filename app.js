const express = require('express')
const axios = require('axios');

const port = 3000
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.get('/api/items', function (req, res) {
  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=bmw')
  .then(function(response) {
  	const {data} = response
  	
  	res.send({
  	  author: {
  	  	name: 'Miguel',
  	  	lastname: 'Escurra'
  	  },
  	  items: data.results.slice(0, 4).map(function(result) {
  	  	return {
  	  	  id: result.id,
  	  	  title: result.title
  	    }
  	  })
  	})
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))