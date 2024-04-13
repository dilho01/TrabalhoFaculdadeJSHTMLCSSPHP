function voltar(){
    window.location.href = 'login.html'
}
function salvar() {
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
  
    if (nome.value === '' || sobrenome.value === '' || email.value === '' || senha.value === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // banco de dados
    alert('Dados salvos com sucesso!');
}  