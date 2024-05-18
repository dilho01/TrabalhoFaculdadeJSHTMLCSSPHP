function voltar() {
  window.location.href = 'login.html';
}

function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const sobrenome = document.getElementById('sobrenome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (nome === '' || sobrenome === '' || email === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
  }

  alert('Dados salvos com sucesso!');
  return true;
}
  // Pegar o formulário 

  var formCadastro = document.getElementById('formCadastro'); 

 

  // Quando o formulário for enviado 

  formCadastro.addEventListener('submit', function(event) { 

      event.preventDefault(); // Impedir o envio do formulário 



      // Enviar o formulário via AJAX 

      var formData = new FormData(formCadastro); 



      var xhr = new XMLHttpRequest(); 

      xhr.onreadystatechange = function() { 

          if (xhr.readyState == 4 && xhr.status == 200) { 

              // Exibir os dados cadastrados no modal 

              document.getElementById('dadosCadastrados').innerHTML = xhr.responseText; 

              document.getElementById('myModal').style.display = "block"; 

          } 

      }; 

      xhr.open("POST", formCadastro.action, true); 

      xhr.send(formData); 

  }); 

