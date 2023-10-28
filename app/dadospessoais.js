const $ = (elemento) => document.querySelector(elemento);

$("#Enviar").addEventListener("click", (ev) => {
  ev.preventDefault();

  const nome = $("#nome").value;
  const email = $("#email").value;
  const telefone = $("#tel").value;

  const tudoPreenchido =
    nome.length !== 0 &&
    email.length !== 0 &&
    telefone.length !== 0;

    if (tudoPreenchido === false) {
        Swal.fire({
            title: 'Campo vazio!',
            text: 'Por favor, preencha todos os campos.',
            icon: 'warning',
            customClass: {
                popup: 'fundo',
                title: 'titulo',
                confirmButton: 'meu-botao',
            }
        });
        return;
      }

  const dadosCadastrado = {
    email,
    nome,
    telefone,
  };

  const string = JSON.stringify(dadosCadastrado);
  localStorage.setItem("dados", string);

  Swal.fire({
    title: 'Salvo!',
    text: 'Seus dados pessoais foram armazenados com sucesso!\nVocê será direcionado à página do currículo novamente.',
    icon: 'success',
    customClass: {
        popup: 'fundo',
        title: 'titulo',
        confirmButton: 'meu-botao',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "./curriculo.html";
    }
  });
});

$("#Voltar").addEventListener("click", (ev) => {
  ev.preventDefault();
  
  window.location.href = "./curriculo.html";
});