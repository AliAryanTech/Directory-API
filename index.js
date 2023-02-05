const app = require('express')()
const { readdirSync } = require('fs-extra')
path = process.cwd()

app.get('/', (req, res) => {
  res.send('Hello Oni-Chan')
})

app.get('/random', (req, res) => {
  const directory = '/directory/'
  const files = readdirSync(`.${directory}`)
  const randomFile = files[Math.floor(Math.random() * files.length)]
  res.sendFile(path + directory + randomFile)
})

app.get('*', (req, res) => res.sendStatus(404))
app.listen(8080, () => {
  console.log(`Port is Running 8080`)
})
