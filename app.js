const express = require('express');
const app = express();
const ip = require('ip');
const multer = require('multer');
const mongoose = require('mongoose');
const product = require('./model');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// use dotenv 
require('dotenv').config();
const htmlDefault = require('./constants/htmlExample');

//connect to database
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true });
// increase limit of json
app.use(express.json({ limit: '50mb' }));

function convertImageToBase64(filePath) {
  const image = fs.readFileSync(filePath);
  return image.toString('base64');
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + uuidv4() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            cb(null, true);
        } else {
            cb(new Error('Formato de arquivo inválido.'));
        }
    },
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/import',  (req, res) => {
    res.sendFile(__dirname + '/public/import.html');
});

app.post('/writeHTML', async (req, res) => {
    try {
        const htmlsToCreate = req.body;
        htmlsToCreate.forEach(({title, description, images, subtitle}) => {
            const newHtml = htmlDefault(title, description, images, subtitle);
            try {
                fs.writeFileSync(`./public/${title.replace(' ', '')}.html`, newHtml);
            } catch (error) {
                console.log(error);
            }
        });
       
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
});

app.post('/import', upload.fields([{ name: 'recfile', maxCount: 10 }]), async (req, res) => {
  try {
      const { description, title, subtitle } = req.body;
      const files = req.files.recfile; // Array de arquivos recebidos

      // Converter todas as imagens para base64
      const imagesBase64 = files.map(file => {
          const base64 = convertImageToBase64(file.path);
          fs.unlinkSync(file.path); // Exclui o arquivo após a conversão
          return base64;
      });

      // Criar um novo post com as imagens, título e descrição
      const newPost = {
          title,
          description,
          images: imagesBase64,
          subtitle
      };

      // Salvar no MongoDB
      await product.create(newPost);
      

      res.status(200).json({ status: 'success', message: 'Post salvo com sucesso.' });
  } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({ success: false, message: 'Erro interno no servidor' });
  }
});

app.get('/getBrinquedos', async (req, res) => {
    try {
        const products = await product.find({}).lean();
        res.json({ status: 'success', products });
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    console.log(`Server IP address is ${ip.address()}`);
});
