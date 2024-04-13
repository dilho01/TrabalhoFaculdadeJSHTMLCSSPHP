function entra(){
  const permittedUsers = [
   { login: 'gabriel', senha: '123' },
  ];

  const form = document.querySelector('.registrador');
  const loginInput = document.querySelector('#login');
  const senhaInput = document.querySelector('#senha');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredLogin = loginInput.value;
    const enteredSenha = senhaInput.value;

    const userExists = permittedUsers.some(
      (user) => user.login === enteredLogin && user.senha === enteredSenha
    );

    if (userExists) {
      alert('Bem-vindo!');
      window.location.href = 'index2.html';
    } else {
      alert('Usuário ou senha incorretos. Por favor, tente novamente.');
    }
  });
}


function NaoCadastro() {
  window.location.href = 'cadastro.html';
}
