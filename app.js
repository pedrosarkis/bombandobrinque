const express = require('express');
const app = express();
const ip = require('ip');

app.use(express.json());
//set public 
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    console.log(`Server IP address is ${ip.address()}`);
});

