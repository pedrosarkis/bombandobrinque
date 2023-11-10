const express = require('express');
const app = express();
const ip = require('ip');
const multer = require('multer');
const mongoose = require('mongoose');
// const product = require('./model');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // Pasta onde as imagens serão armazenadas
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  });
  
  const upload = multer({ storage: storage });


app.use(express.json());
//set public 
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/import',  (req, res) => {
    res.sendFile(__dirname + '/public/import.html');
});

app.post('/import', upload.array('image'), async (req, res) => {
    try {
      const { description, title } = req.body;
      const images = req.files.map(file => file.filename);
  
      // Aqui você pode usar os dados para interagir com o banco de dados ou realizar outras operações
  
      res.json({ success: true, message: 'Dados recebidos com sucesso!' });
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    console.log(`Server IP address is ${ip.address()}`);
});

