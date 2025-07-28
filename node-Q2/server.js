const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Static resource server running at http://localhost:${PORT}`);
});
