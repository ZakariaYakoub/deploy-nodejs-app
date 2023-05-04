const express = require('express');
const app = express();
const port = 3000;

app.use('/imgs', express.static(__dirname + '/imgs'));
app.use('/styles', express.static(__dirname + '/styles'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact.html', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/project.html', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
