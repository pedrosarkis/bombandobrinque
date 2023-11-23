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
      formData.append('subtitle', document.getElementById('subtitle').value);

      enviarDadosParaServidor(formData);
    } else {
      console.warn('Nenhuma imagem para enviar.');
    }
  });
});

async function enviarDadosParaServidor(formData) {
  // URL do servidor
  const url = '/import';

  // Configuração do objeto de opções para a requisição POST
  const options = {
    method: 'POST',
    body: formData,
  };

  // Envio da requisição
  try {
    const response = await fetch(url, options);
    if(response.status === 200) {
      alert('Imagem enviada com sucesso!');
    } else {
      alert('Erro ao enviar imagem!');
    }
  } catch (error) {
    alert('Erro ao enviar imagem!');
  }
  

  
}
