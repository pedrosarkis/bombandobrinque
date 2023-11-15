const sharp = require('sharp');

sharp('public\\wa_images\\bombando-brinque-home1b0e.jpg')
  .toFile('imagem_comprimida.jpg', (err, info) => {
    if (err) {
      console.error('Erro ao processar a imagem:', err);
    } else {
      console.log('Imagem processada e salva como "imagem_comprimida.jpg"', info);
    }
  });