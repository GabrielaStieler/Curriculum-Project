const $ = (elemento) => document.querySelector(elemento);

$("#Entrar").addEventListener("click", (ev) => {
  ev.preventDefault();

  const string = localStorage.getItem("usuario");
  const usuarioCadastrado = JSON.parse(string);

  const { user, senha } = usuarioCadastrado;

  const dadosCorretos =
    user === $("#user").value && senha === $("#senha").value;
  console.log(dadosCorretos);

  if (!dadosCorretos) {
    Swal.fire({
        title: 'Dados inválidos!',
        text: 'Por favor, preencha todos os campos e verifique-os corretamente.',
        icon: 'warning',
        customClass: {
            popup: 'fundo',
            title: 'titulo',
            confirmButton: 'meu-botao',
        }
    });
    return;
  }

  window.location.href = "./curriculo.html";
});

$("#Cadastro").addEventListener("click", (ev) => {
    ev.preventDefault();

    window.location.href = "./cadastro.html";
  });