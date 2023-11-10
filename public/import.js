const fileInput = document.getElementById('image');
const reader = new FileReader();

fileInput.addEventListener('change', function () {
  const file = fileInput.files[0];

  reader.onloadend = function () {
    const base64Data = reader.result.split(',')[1];
    // Agora, você pode enviar base64Data para o servidor
    enviarImagemParaServidor(base64Data);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});


function enviarImagemParaServidor(base64Data, title, description) {
  // URL do servidor
  const url = '/import';

  // Dados a serem enviados para o servidor
  const data = {
    title: title,
    description: description,
    base64Data: base64Data,
  };

  // Configuração do objeto de opções para a requisição POST
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  // Envio da requisição
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do servidor:', data);
    })
    .catch(error => {
      console.error('Erro ao enviar dados:', error);
      // Aqui você pode lidar com erros, como exibir uma mensagem de erro
    });
}

// Exemplo de uso
const base64Data = '...'; // Substitua isso pelo seu dado base64
const title = 'Título da Imagem';
const description = 'Descrição da Imagem';

enviarImagemParaServidor(base64Data, title, description);
