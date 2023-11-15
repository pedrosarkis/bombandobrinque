const fileInput = document.getElementById('image');
const submitButton = document.getElementById('submit');

fileInput.addEventListener('change', function () {
  const files = fileInput.files;

  submitButton.addEventListener('click', function () {
    if (files.length > 0) {
      const formData = new FormData();

      // Adiciona os arquivos ao FormData
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append('recfile', file, file.name);
      }

      // Adiciona outros dados ao FormData
      formData.append('title', document.getElementById('title').value);
      formData.append('description', document.getElementById('description').value);

      enviarDadosParaServidor(formData);
    } else {
      console.warn('Nenhuma imagem para enviar.');
    }
  });
});

function enviarDadosParaServidor(formData) {
  // URL do servidor
  const url = '/import';

  // Configuração do objeto de opções para a requisição POST
  const options = {
    method: 'POST',
    body: formData,
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
