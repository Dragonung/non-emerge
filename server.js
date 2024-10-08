const express = require('express');
const PORT = process.env.PORT || 3001;
const routes = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(PORT, () => {
  console.log(`NonEmerge app listening at http://localhost:${PORT}`);
});
