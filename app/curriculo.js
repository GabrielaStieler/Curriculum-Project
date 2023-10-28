const $ = (elemento) => document.querySelector(elemento);

$("#Visualizar").addEventListener("click", (ev) => {
    ev.preventDefault();
  
    window.location.href = "./visualizacao.html";
  });

$("#Dados").addEventListener("click", (ev) => {
  ev.preventDefault();

  window.location.href = "./dadospessoais.html";
});

$("#Form").addEventListener("click", (ev) => {
    ev.preventDefault();
  
    window.location.href = "./formacao.html";
  });

$("#Exp").addEventListener("click", (ev) => {
    ev.preventDefault();
  
    window.location.href = "./experiencias.html";
  });

$("#Sair").addEventListener("click", (ev) => {
    ev.preventDefault();
  
    window.location.href = "./login.html";
  });