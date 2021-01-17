const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/photoGallery/:homeId', controller.getHomeInfo);
app.patch('/api/photoGallery/:homeId', controller.toggleHomeSaved);
app.get('/api/photoGallery', controller.getAllHomes);
app.delete('/api/photoGallery', controller.deleteAll);

app.listen(port, () => {
  console.log('listening at port ', port);
});
