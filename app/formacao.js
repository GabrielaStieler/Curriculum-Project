const $ = (elemento) => document.querySelector(elemento);

$("#Enviar").addEventListener("click", (ev) => {
  ev.preventDefault();

  const instituicao = $("#estudo").value;
  const curso = $("#curso").value;
  const data = $("#data").value;

  const tudoPreenchido =
    instituicao.length !== 0 &&
    curso.length !== 0 &&
    data.length !== 0;

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

  const formCadastrado = {
    instituicao,
    curso,
    data,
  };

  const string = JSON.stringify(formCadastrado);
  localStorage.setItem("formação", string);

  Swal.fire({
    title: 'Salvo!',
    text: 'Sua formação foi armazenada com sucesso!\nVocê será direcionado à página do currículo novamente.',
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