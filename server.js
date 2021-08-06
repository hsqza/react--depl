const express = require('express');

const port = process.env.PORT || '5000';
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.listen(port, () => console.log(`Server running on localhost:${port}`));
