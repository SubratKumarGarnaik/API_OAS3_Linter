const app = require('express')()
const zally = require('zally-web-ui')(/*options*/);

app.use('/api-linter', zally);
app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});