const app = require('express')();
const { readdirSync } = require('fs');
File = process.cwd();

app.get('/', (req, res) => {
  res.send("Hello Oni-Chan")
})

app.get('/random', (req, res) => {
const directory = '/directory/'
const files = readdirSync(`.${directory}`)
let randomFile = files[Math.floor(Math.random() * files.length)]
res.sendFile(File + `${directory}${randomFile}`);
});

app.listen(8080, () => {
  console.log(`Port is Running 8080`)
});