require('newrelic');
const app = require('./index.js');

const port = 8002;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
