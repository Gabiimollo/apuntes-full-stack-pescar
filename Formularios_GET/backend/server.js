const express = require('express')
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// -------------------------------

app.get('/', (req, res) => {
  res.send('Soy un backend!')
})

app.get('/busqueda', (req, res) => { // http://localhost:8080/busqueda
  let buscar = req.query.buscar
  //console.log(buscar)
  //buscar = 'Litcoin'
  //res.send(buscar)
  res.redirect(`https://google.com.ar/search?q=${buscar}`)
})

app.get('/datos-persona', (req, res) => { // http://localhost:8080/datos-persona
  const data = req.query // query-string
  console.log(data)
  res.json({data})
})

app.post('/datos-producto', (req, res) => { // http://localhost:8080/datos-producto
    const data = req.body // cuerpo de la petición
    console.log(data)
    res.send({data})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})