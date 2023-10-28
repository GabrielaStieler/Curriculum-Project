const $ = (elemento) => document.querySelector(elemento);

$("#Cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();

  const user = $("#usuario").value;
  const email = $("#email").value;
  const senha = $("#senha").value;
  const confirmaSenha = $("#confirma-senha").value;

  const senhaConfirmada = senha === confirmaSenha;

  if (!senhaConfirmada) {
    Swal.fire({
      title: 'Senha inválida!',
      text: 'As senhas fornecidas não batem.',
      icon: 'error',
      customClass: {
          popup: 'fundo',
          title: 'titulo',
          confirmButton: 'meu-botao',
      }
  });
    return;
  }

  const tudoPreenchido =
    user.length !== 0 &&
    email.length !== 0 &&
    senhaConfirmada.length !== 0 &&
    senha.length !== 0;

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

  const usuarioCadastrado = {
    email,
    user,
    senha,
    confirmaSenha,
  };

  const string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuario", string);

  Swal.fire({
    title: 'Cadastrado!',
    text: 'Seu cadastro foi realizado com sucesso!\nVocê será direcionado à página de login.',
    icon: 'success',
    customClass: {
        popup: 'fundo',
        title: 'titulo',
        confirmButton: 'meu-botao',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "./login.html";
    }
  });
});

$("#Login").addEventListener("click", (ev) => {
  ev.preventDefault();
  
  window.location.href = "./login.html";
});