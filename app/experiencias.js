const $ = (elemento) => document.querySelector(elemento);

$("#Enviar").addEventListener("click", (ev) => {
  ev.preventDefault();

  const empresa = $("#empresa").value;
  const cargo = $("#cargo").value;
  const dataInicio = $("#data1").value;
  const dataFim = $("#data2").value;

  const tudoPreenchido =
    empresa.length !== 0 &&
    cargo.length !== 0 &&
    dataInicio.length !== 0 &&
    dataFim.length !== 0;

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

  const expCadastrado = {
    empresa,
    cargo,
    dataInicio,
    dataFim,
  };

  const string = JSON.stringify(expCadastrado);
  localStorage.setItem("experiências", string);

  Swal.fire({
    title: 'Salvo!',
    text: 'Sua experiência foi armazenada com sucesso!\nVocê será direcionado à página do currículo novamente.',
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