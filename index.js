const express = require('express');

const app = express();

app.use(express.json());

// API
app.use('/', require('./router/api/createNewRoom'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));