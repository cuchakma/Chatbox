const path    = require('path');    
const express = require('express');
const app     = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets/js')));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});