const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`Hall booking app listening at http://localhost:${port}`);
});
